# ap-api
# Required softwere

* NodeJS
* npm
  
# Installation

1. Install modules
	
	First 
	
	### Windows PC
    ```
	npm install
	```

	### Linux / Mac PC
    ```
	npm install
	```

2. Import database file in "db" folder.

    configure database connection in
    
     ```
    prisma -> schema.prisma -> URL
     ```

    You can call URL below
	
    ```
	http://127.0.0.1:3002
	```

# If do not have Mysql server 
1. Docker Build with docker-compose

    ```
	docker-compose build --no-cache
	```

1. Launch Docker container

    ```
	docker-compose up -d
	```
