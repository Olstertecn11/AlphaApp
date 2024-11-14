

import os
from pydub import AudioSegment

for file in os.listdir():
    if file.endswith(".ogg"):
        # Cargar el archivo .ogg
        ogg_audio = AudioSegment.from_ogg(file)

        # Convertir y guardar como .m4a usando codec AAC
        output_file = f"{os.path.splitext(file)[0]}.m4a"
        ogg_audio.export(output_file, format="ipod", codec="aac")

        print(f"Convertido: {file} -> {output_file}")
