# password-generator-symlink-nodejs
A simple password generator command line application using nodejs and commander

node server -h

Usage: server [options]                                                                                                                                                                                                                         Simple Password Generator                                                                                                                                                                                                                       Options:                                                                                                                  -V, --version          output the version number                                                                        -l, --length <number>  length of password (default: "8")                                                                -s, --save             save password to passwords.txt                                                                   -nn, --no-numbers      remove numbers                                                                                   -ns, --no-symbols      remove symbols                                                                                   -h, --help             display help for command                                                                                                                   

Example: passgen --length-20 -nn -ns // gives a password of 20 characters including alphabets only
