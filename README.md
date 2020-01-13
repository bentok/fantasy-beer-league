# FantasyBeerLeague

#### Run the app
- `dotnet run`

#### Create new module
- `dotnet new console -lang "F#" -o src/{ModuleName}`
- `dotnet sln add src/{ModuleName}/{ModuleName}.fsproj`

#### Add paket and install dependencies in a module
- `dotnet new tool-manifest`
- `dotnet tool install paket`
- `dotnet tool restore`
- `dotnet paket init`
- `dotnet paket add {DependencyName}`
- `dotnet paket reload`
- (add package to .fsproj file)

#### Import module into app module
- `dotnet add src/App/App.fsproj reference src/{ModuleName}/{ModuleName}.fsproj`