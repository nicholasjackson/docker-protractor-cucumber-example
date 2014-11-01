task :up do
  sh 'boot2docker up'
end

task :halt do
  sh 'boot2docker halt'
end

task :setup do |t, args|
  Dir.mkdir("./gems") unless Dir.exists?("./gems")

  sh "#{docker_command('-w /src')} bundle"
  sh "#{docker_command('-w /src/protractor')} npm install"
  sh "#{docker_command('-w /src/protractor --user swuser')} bower install"
  sh "#{docker_command('-w /src/protractor')} ./node_modules/protractor/bin/webdriver-manager update"
end

task :run do |t, args|
  sh "#{docker_command('-w /src')} rake docker:protractor"
end

task :bash do |t, args|
  sh "#{docker_command('-w /src')} /bin/bash"
end

namespace :docker do
  task :cucumber do
    #clear_cookies
    start_selenium
    Dir.chdir("./ruby") do
      sh "cucumber"
    end
  end

  task :protractor do
    clear_cookies
    start_selenium
    Dir.chdir("./ruby") do
      sh "cucumber"
    end
    Dir.chdir("./protractor") do
      sh "grunt protractor"
    end
  end

  def start_selenium
    sh "java -jar /src/protractor/node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar &"
    sleep 2
  end

  def clear_cookies
    cookie_file = './phantom_cookies.txt'
    FileUtils.rm cookie_file if File.exists? cookie_file
  end
end

def docker_command(args)
  <<-eos
    boot2docker ssh docker run \\
    --name devserver \\
    -it --rm \\
    -e GEM_HOME=/src/gems \\
    -e PATH=$PATH:/src/gems/bin:/src/protractor/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin \
    -v $(pwd):/src \\
    #{args} \\
    nicholasjackson/docker-devserver:develop \\
  eos
end
