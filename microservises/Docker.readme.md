Docker
1-250;

- kernel
- container
- image

<div>
1docker 2run 3<image name/> 3command

1-reference the docker client
2-try to run anf run container
3-name of image to use this container
4-default command

</div>

<div>

# build am image based on dockerfile in the current directory

docker build -t [nameofdockerID]/[nameofdocker] .

# create and start a container based on provided imageid or tag

docker run [imageid or imagetag]

# override the default command

docker run -it [imageid or imagetag]

# all running containers

docker ps

# execute the given command in the running container

docker exec -it [containerID] [cmd]

# print out logs from given container

docker logs [containerID]

</div>
