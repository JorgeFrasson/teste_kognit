FROM mcr.microsoft.com/dotnet/aspnet:6.0-focal AS base

WORKDIR /app

EXPOSE 2321

FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build

WORKDIR /src

COPY ["kognit-core.csproj", "./"]

RUN dotnet restore "./kognit-core.csproj"

COPY . .

WORKDIR "/src/."

RUN dotnet build "kognit-core.csproj" -c Release -o /app/dev

FROM build AS publish

RUN dotnet publish "kognit-core.csproj" -c Release -o /app/publish

FROM base AS final

WORKDIR /app

COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "kognit-core.dll"]