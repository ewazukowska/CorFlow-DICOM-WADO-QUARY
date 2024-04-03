FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /CorFlow-Backend

COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /CorFlow-Backend
COPY --from=build-env /CorFlow-Backend/out .
ENTRYPOINT ["dotnet", "DotNet.Docker.dll"]
