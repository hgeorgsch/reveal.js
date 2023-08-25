OGG=titlepage.ogg
MP3=slide01.mp3 slide02.mp3 
F=$(OGG) $(MP3)
IDIR=../../../demo/audio/

V2=-vcodec libtheora -b:v 500k

%.ogg: %.mp3
	ffmpeg -i $< $(V1) -y $@
%.mp3: %.txt
	gtts-cli -f $< -o $@
%.txt: %.html
	pandoc --columns=999999 -t plain $< | sed -e '/[a-z]/{N;s/\n//;}' > $@
install: $F
	mkdir -p $(IDIR)
	cp $F $(IDIR)
clean:
	rm -f *.txt
