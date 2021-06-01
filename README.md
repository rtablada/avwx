# Metar Report Reader

This is a small CLI to announce the current METAR report for a given ICAO based on data from https://avwx.rest.

## Using This Tool

Once installed (see the development and configuration sections below), this CLI can be used by running `metar` from the console.

Running `metar` alone will print and announce the METAR report for the default ICAO (KJFK unless another value is set).

You can also pass in a different ICAO to get the report for different airports or nav fixes (ex `metar katl` will get the metar for Hartsfield Jackson Intl.).

## Development

1. Clone this repo
2. Run `yarn` to download all dependencies.
3. Run `yarn link` to set up binary links
4. Run `yarn build:dev` to watch and build all files
5. Configure your ENV variables :point_down:
6. Run `metar` command to test

## Configuration

To use this app, you will need to create an account on https://avwx.rest and get an API token (don't worry it's free).

Then set the env var `AVWX_TOKEN` to the token created on your account.

There is also an env var `METAR_ICAO` which sets the default ICAO code used when the `metar` command is run with no arguments.

## Notes

This currently only runs on newer versions of Mac since the voice is set to use `Samantha` (the default US Siri voice).
