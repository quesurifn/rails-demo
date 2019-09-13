require 'json'
require 'date'

class ApiController < ApplicationController
  def index
    data = RestClient.get("api.openweathermap.org/data/2.5/forecast?q=Phoenix,us&units=imperial&appId=#{Rails.application.credentials.openweather[:api_key]}")
    parsed_json = JSON.parse(data)
    puts parsed_json
    parsed_json['list'].each do |el|
      date = Time.at(el['dt']).to_date.to_s
      el['date'] = date
    end

    list = parsed_json['list']
    list = list.group_by { |h| h['date'] }

    list = list.map do |_k, v|
      max_temp = v.max_by { |x| x['main']['temp'] }
      min_temp = v.min_by { |x| x['main']['temp'] }
      average_humidity = v.sum { |x| x['main']['humidity'] } / v.size
      description = v[0]['weather'][0]['description']
      wind = v[0]['wind']
      { max_temp: max_temp['main']['temp'], min_temp: min_temp['main']['temp'], average_humidity: average_humidity, description: description, wind: wind }
    end


    respond_to do |format|
      format.json { render json: list }
    end
  end
end
