{
  pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-24.05.tar.gz") {}, # get main nixpkg set
  fetchFromGitHub ? pkgs.fetchFromGitHub, # get fetchFromGitHub tool

  # get other special nixpkg sets (like for specific versions of things)
  denopkg ? import (fetchFromGitHub {
    owner = "NixOS";
    repo = "nixpkgs";
    rev = "ccc0c2126893dd20963580b6478d1a10a4512185";
    sha256 = "sha256-4HQI+6LsO3kpWTYuVGIzhJs1cetFcwT7quWCk/6rqeo=";
  }) {}
}:

pkgs.mkShell {
  buildInputs = [
    pkgs.git
    denopkg.deno
  ];

  shellHook = ''
    echo "say a thing"
  '';
} 