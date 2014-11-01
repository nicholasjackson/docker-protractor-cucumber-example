require 'rubygems'
require 'capybara'
require 'capybara/dsl'
require 'capybara/poltergeist'

Capybara.register_driver :poltergeist do |app|
  puts "start driver"
  Capybara::Poltergeist::Driver.new(app, {:phantomjs_options => ['--cookies-file=/src/phantom_cookies.txt']})
end

Capybara.run_server = false
Capybara.default_driver = :poltergeist
Capybara.default_selector = :css

module Helpers
  def without_resynchronize
    page.driver.options[:resynchronize] = false
    yield
    page.driver.options[:resynchronize] = true
  end
end

World(Capybara::DSL, Helpers)
