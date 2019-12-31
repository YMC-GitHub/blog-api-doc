#install

#run with cmd cli

```sh

#parse only .js and .ts files
apidoc --file-filters ".*\\.js$" -f ".*\\.ts$"

#Location of your project files
apidoc --input myapp/
#where to put to generated documentation
apidoc --output apidoc/
#Use template for output files
apidoc --template mytemplate/
```

#create your own template
```sh
#https://github.com/apidoc/apidoc/tree/master/template
```

#extend with your own parameters

#config with a config file

#define reusable snippets of your documentation

#maintain the documentation for all previous versions and the latest version of the API

#reference
```sh
#https://apidocjs.com/#demo
```

rm -rf yarn.lock
rm -rf yarn*
rm -rf robots*
rm -rf README*
