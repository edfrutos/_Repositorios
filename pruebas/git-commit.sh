#!/bin/bash

# Abrir VS Code para ingresar el mensaje del commit
code --wait git-commit-message.txt

# Hacer el commit con el mensaje del archivo
git commit -F git-commit-message.txt

# Eliminar el archivo con el mensaje del commit
rm git-commit-message.txt
