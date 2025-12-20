package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	lines := "package main\n\nimport(\n\t\"fmt\" \n)\n\nfunc main() {\n}"
	const FILE_NAME = "main.go"

	if _, err := os.ReadFile(FILE_NAME); err == nil {
		fmt.Printf("The file \"%s\" exists\n", FILE_NAME)
		os.Exit(0)
	}

	f, err := os.Create(FILE_NAME)
	if err != nil {
		log.Fatalf("Could not create %s file\n", FILE_NAME)
	}

	_, err = f.WriteString(lines)
	if err != nil {
		log.Fatalf("Error writting string %s\n", lines)
	}
}
