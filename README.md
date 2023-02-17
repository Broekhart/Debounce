# What is this?

Get a simple debounce function for your javascript project

# Installation

`npm i debounce`

Then...

```
import debounce from 'debounce'

debounce(() => console.log("this message will print in 1 second"), 1000)
```

## Options

The debounce function has two parameters: **callback**, where you can put your debounce function,
and **delay**, where you can put the seconds of delay (default is 1000).
