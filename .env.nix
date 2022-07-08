{ nixpkgs ? import <nixpkgs> {} }:
with nixpkgs;
mkShell {
  buildInputs = [
    python310
    python310Packages.mkdocs
    python310Packages.mkdocs-material
  ];
}
