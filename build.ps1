$version = (Get-Content .\version.json | ConvertFrom-Json).main
ng build --prod
docker build -t natesite:$version .
docker save -o G:/natesite.tar natesite:$version
scp G:/natesite.tar nate@192.168.1.69:/home/nate
ssh nate@192.168.1.69 docker load --input /home/nate/natesite.tar
ssh nate@192.168.1.69 docker image tag natesite:$version localhost:5000/natesite:$version
ssh nate@192.168.1.69 docker push localhost:5000/natesite:$version