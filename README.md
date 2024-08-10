# EFI-Integradora

README

Para crear un entorno virtual desde linux tienes que primero abrir la terminal o consola e ir hasta la carpeta donde quieres crear tu proyecto, por ejemplo, “Descargas”, utilizando “cd Descargas”. Luego tiene que crear la carpeta con el nombre de tu proyecto con el comando “mkdir myproject”. Una vez creada la carpeta vamos a entrar en ella con el comando “cd myproject”.  El siguiente paso de nuestro proyecto es hacer que el entorno virtual sea dirigido a python3 usando el comando “python3 -m project venv”  y ahora ya es apto para que lo podamos activar usando el comando “source project/bin/activate”. 
Una vez listos con nuestro entorno activado vamos a empezar a descargar  de las dependencias, las cuales son flask,flask-SQLAlchemy y SQLigrate para lo cual vamos a escribir el siguiente comando: “ pip install flask”, “pip install SQLAlchemy”, “pip install sqlmigrate” respectivamente