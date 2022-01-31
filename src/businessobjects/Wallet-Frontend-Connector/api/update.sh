#run in the api directory

# I used homebrew (https://brew.sh) to install:
# - curl https://formulae.brew.sh/formula/curl
# - openapi-generator-cli https://formulae.brew.sh/formula/openapi-generator


#curl https://api8.thefunding.exchange/swagger/v1/swagger.json > swagger.json

curl http://54.254.168.119:4000/docs/v1/docs.json > swagger.json
openapi-generator-cli generate -i swagger.json -g typescript-axios -o ./ --skip-validate-spec

echo "\nThe api has been regenerated"