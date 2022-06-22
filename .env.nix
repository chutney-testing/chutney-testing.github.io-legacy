{ nixpkgs ? import <nixpkgs> {} }:
with nixpkgs;
mkShell {
  buildInputs = [
    ruby
    jekyll
    bundler
  ];
}
