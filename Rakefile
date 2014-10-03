task :up do
  sh 'vagrant up'
end

task :destroy do
  sh 'vagrant destroy -f'
end

task :setup do |t, args|
  sh "DOCKER_HOST=tcp://127.0.0.1:2375 docker run --user swuser -it --rm -w / -p 8080:8080 -v /vagrant/data:/src njackson/nodetest ls -las"
  sh "DOCKER_HOST=tcp://127.0.0.1:2375 docker run --user swuser -it --rm -w /src -p 8080:8080 -v /vagrant/data:/src njackson/nodetest bower install"
  sh "DOCKER_HOST=tcp://127.0.0.1:2375 docker run -it --rm -w /src -p 8080:8080 -v /vagrant/data:/src njackson/nodetest npm install"
end

task :run do |t, args|
  sh "DOCKER_HOST=tcp://127.0.0.1:2375 docker run -it --rm -w /src -p 8080:8080 -p 35729:35729 -v /vagrant/data:/src njackson/nodetest grunt serve --force"
end

task :e2e do |t, args|
  sh "DOCKER_HOST=tcp://127.0.0.1:2375 docker run -it --rm -w /src -p 8080:8080 -p 35729:35729 -v /vagrant/data:/src njackson/nodetest grunt e2e"
end

task :build do |t, args|
  sh "DOCKER_HOST=tcp://127.0.0.1:2375 docker build --rm -t njackson/nodetest ./dockerfile/node"
end

task :ssh do
  sh 'ssh docker@127.0.0.1 -p 2222 -i ~/.vagrant.d/insecure_private_key -o StrictHostKeyChecking=no'
end
