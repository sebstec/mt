NAME_OF_DOC="presentation"

all: 
	mkdir -p ./build
	mkdir -p ./pdf
	cp ./${NAME_OF_DOC}.tex ./build/${NAME_OF_DOC}.tex
	latexmk -pdflatex=lualatex -pdf -output-directory=build ${NAME_OF_DOC}.tex 
	# makeglossaries -d ./build/ ${NAME_OF_DOC}
	# clear all build files and then make
	# latexmk -gg -pdf -output-directory=build ${NAME_OF_DOC}.tex 
	# for documents with literature references
	# latexmk -pdf -output-directory=build ${NAME_OF_DOC}.tex 
	mv ./build/${NAME_OF_DOC}.pdf ./pdf/${NAME_OF_DOC}.pdf 
clean: 	
	#rm -f *.aux *.log *.out *.xml *.gz *bib *.bbl *.blg *.fdb_latexmk *.fls *.bcf *.lof *.lot *.toc
	#rm -rf ./build/

