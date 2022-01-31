#run in the api directory

# I used homebrew (https://brew.sh) to install:
# - curl https://formulae.brew.sh/formula/curl
# - openapi-generator-cli https://formulae.brew.sh/formula/openapi-generator

#curl https://api5.ativoswallet.com/swagger/v1/swagger.json > swagger.json
#openapi-generator-cli generate -i swagger.json -g typescript-axios -o ./ --skip-validate-spec

curl https://api7.tfx.finance/swagger/v1/swagger.json > swagger.json

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/swagger.json \
    -g typescript-axios \
    -o /local --skip-validate-spec


echo "\nThe api has been regenerated"
