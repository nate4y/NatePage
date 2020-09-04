ng build --prod
docker build -t natesite:0.1.1 .
docker save -o natesite.tar natesite:0.1.1
scp natesite.tar nate@192.168.1.69:/home/nate
ssh nate@192.168.1.69 docker load --input /home/nate/natesite.tar