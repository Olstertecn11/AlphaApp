
import React, { useState, useEffect } from 'react';
import { Button, Text } from "native-base";
import { Audio } from 'expo-av';  // Importamos el módulo Audio de expo-av
import { Colors } from "../constants/Colors";


const ButtonBox = ({ item, index }) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const audios = {

    "ba": require("../assets/audio/letters/sylabics/ba.m4a"),
    "be": require("../assets/audio/letters/sylabics/be.m4a"),
    "bi": require("../assets/audio/letters/sylabics/bi.m4a"),
    "bo": require("../assets/audio/letters/sylabics/bo.m4a"),
    "bu": require("../assets/audio/letters/sylabics/bu.m4a"),
    "ca": require("../assets/audio/letters/sylabics/ca.m4a"),
    "ce": require("../assets/audio/letters/sylabics/ce.m4a"),
    "ci": require("../assets/audio/letters/sylabics/ci.m4a"),
    "co": require("../assets/audio/letters/sylabics/co.m4a"),
    // "cu": require("../assets/audio/letters/sylabics/cu.m4a"),
    "da": require("../assets/audio/letters/sylabics/da.m4a"),
    // "de": require("../assets/audio/letters/sylabics/de.m4a"),
    // "di": require("../assets/audio/letters/sylabics/di.m4a"),
    "do": require("../assets/audio/letters/sylabics/do.m4a"),
    "du": require("../assets/audio/letters/sylabics/du.m4a"),
    "fa": require("../assets/audio/letters/sylabics/fa.m4a"),
    // "fe": require("../assets/audio/letters/sylabics/fe.m4a"),
    // "fi": require("../assets/audio/letters/sylabics/fi.m4a"),
    "fo": require("../assets/audio/letters/sylabics/fo.m4a"),
    // "fu": require("../assets/audio/letters/sylabics/fu.m4a"),
    "ga": require("../assets/audio/letters/sylabics/ga.m4a"),
    // "ge": require("../assets/audio/letters/sylabics/ge.m4a"),
    // "gi": require("../assets/audio/letters/sylabics/gi.m4a"),
    "go": require("../assets/audio/letters/sylabics/go.m4a"),
    // "gu": require("../assets/audio/letters/sylabics/gu.m4a"),
    // "ha": require("../assets/audio/letters/sylabics/ha.m4a"),
    // "he": require("../assets/audio/letters/sylabics/he.m4a"),
    // "hi": require("../assets/audio/letters/sylabics/hi.m4a"),
    // "ho": require("../assets/audio/letters/sylabics/ho.m4a"),
    // "hu": require("../assets/audio/letters/sylabics/hu.m4a"),
    // "ja": require("../assets/audio/letters/sylabics/ja.m4a"),
    // "je": require("../assets/audio/letters/sylabics/je.m4a"),
    // "ji": require("../assets/audio/letters/sylabics/ji.m4a"),
    // "jo": require("../assets/audio/letters/sylabics/jo.m4a"),
    // "ju": require("../assets/audio/letters/sylabics/ju.m4a"),
    // "ka": require("../assets/audio/letters/sylabics/ka.m4a"),
    // "ke": require("../assets/audio/letters/sylabics/ke.m4a"),
    // "ki": require("../assets/audio/letters/sylabics/ki.m4a"),
    // "ko": require("../assets/audio/letters/sylabics/ko.m4a"),
    // "ku": require("../assets/audio/letters/sylabics/ku.m4a"),
    "la": require("../assets/audio/letters/sylabics/la.m4a"),
    // "le": require("../assets/audio/letters/sylabics/le.m4a"),
    "li": require("../assets/audio/letters/sylabics/li.m4a"),
    // "lo": require("../assets/audio/letters/sylabics/lo.m4a"),
    // "lu": require("../assets/audio/letters/sylabics/lu.m4a"),
    "ma": require("../assets/audio/letters/sylabics/ma.m4a"),
    "me": require("../assets/audio/letters/sylabics/me.m4a"),
    "mi": require("../assets/audio/letters/sylabics/mi.m4a"),
    "mo": require("../assets/audio/letters/sylabics/mo.m4a"),
    // "mu": require("../assets/audio/letters/sylabics/mu.m4a"),
    // "na": require("../assets/audio/letters/sylabics/na.m4a"),
    "ne": require("../assets/audio/letters/sylabics/ne.m4a"),
    "ni": require("../assets/audio/letters/sylabics/ni.m4a"),
    "no": require("../assets/audio/letters/sylabics/no.m4a"),
    "nu": require("../assets/audio/letters/sylabics/nu.m4a"),
    "pa": require("../assets/audio/letters/sylabics/pa.m4a"),
    "pe": require("../assets/audio/letters/sylabics/pe.m4a"),
    "pi": require("../assets/audio/letters/sylabics/pi.m4a"),
    // "po": require("../assets/audio/letters/sylabics/po.m4a"),
    // "pu": require("../assets/audio/letters/sylabics/pu.m4a"),
    "ra": require("../assets/audio/letters/sylabics/ra.m4a"),
    // "re": require("../assets/audio/letters/sylabics/re.m4a"),
    "ri": require("../assets/audio/letters/sylabics/ri.m4a"),
    "ro": require("../assets/audio/letters/sylabics/ro.m4a"),
    // "ru": require("../assets/audio/letters/sylabics/ru.m4a"),
    "sa": require("../assets/audio/letters/sylabics/sa.m4a"),
    "se": require("../assets/audio/letters/sylabics/se.m4a"),
    "si": require("../assets/audio/letters/sylabics/si.m4a"),
    "so": require("../assets/audio/letters/sylabics/so.m4a"),
    // "su": require("../assets/audio/letters/sylabics/su.m4a"),
    "ta": require("../assets/audio/letters/sylabics/ta.m4a"),
    "te": require("../assets/audio/letters/sylabics/te.m4a"),
    "ti": require("../assets/audio/letters/sylabics/ti.m4a"),
    "to": require("../assets/audio/letters/sylabics/to.m4a"),
    // "tu": require("../assets/audio/letters/sylabics/tu.m4a"),
    "va": require("../assets/audio/letters/sylabics/va.m4a"),
    // "ve": require("../assets/audio/letters/sylabics/ve.m4a"),
    "vi": require("../assets/audio/letters/sylabics/vi.m4a"),
    "vo": require("../assets/audio/letters/sylabics/vo.m4a"),
    // "vu": require("../assets/audio/letters/sylabics/vu.m4a"),
    // "xa": require("../assets/audio/letters/sylabics/xa.m4a"),
    // "xe": require("../assets/audio/letters/sylabics/xe.m4a"),
    // "xi": require("../assets/audio/letters/sylabics/xi.m4a"),
    // "xo": require("../assets/audio/letters/sylabics/xo.m4a"),
    // "xu": require("../assets/audio/letters/sylabics/xu.m4a"),
    // "ya": require("../assets/audio/letters/sylabics/ya.m4a"),
    // "ye": require("../assets/audio/letters/sylabics/ye.m4a"),
    // "yi": require("../assets/audio/letters/sylabics/yi.m4a"),
    // "yo": require("../assets/audio/letters/sylabics/yo.m4a"),
    // "yu": require("../assets/audio/letters/sylabics/yu.m4a"),
    // "za": require("../assets/audio/letters/sylabics/za.m4a"),
    // "ze": require("../assets/audio/letters/sylabics/ze.m4a"),
    // "zi": require("../assets/audio/letters/sylabics/zi.m4a"),
    // "zo": require("../assets/audio/letters/sylabics/zo.m4a"),
    // "zu": require("../assets/audio/letters/sylabics/zu.m4a"),
  };


  const playAudio = async () => {
    if (!audios) return;
    try {
      const item_lower = item.toLowerCase();
      const { sound } = await Audio.Sound.createAsync(audios[item_lower]);
      setSound(sound);
      await sound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.error("Error al reproducir el sonido:", error);
    }
  };

  const pauseAudio = async () => {
    try {
      if (sound) {
        await sound.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Error al pausar el sonido:", error);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  if (!audios) {
    return <Text color='white'>Audio no disponible</Text>;
  }

  return (
    <Button
      background={Colors.buttonInactive}
      p="14px"
      w="65px"
      borderRadius={4}
      mt={8}
      mx={4}
      _pressed={{ bg: Colors.buttonActive }}
      onPress={playAudio}
    >
      <Text color={"white"} fontSize={"20px"} textAlign="center">
        {item}
      </Text>
    </Button>
  );
};

export default ButtonBox;

