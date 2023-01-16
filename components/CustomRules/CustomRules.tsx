import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Box, Modal } from "@mui/material";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '57%',
  padding: 10,
  transform: 'translate(-50%, -50%)',
  width: 900,
  backgroundColor: '#ecf0f1',
  border: '1px solid #0A1929',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

export default function CustomRules({open, onClose}: any) {
  return (
      <div>
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
    <Card elevation={0} sx={{ maxWidth: 900, textAlign: "justify", backgroundColor: '#ecf0f1'}}>
      <CardContent>
        <Typography
          sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}
          color="text.secondary"
          gutterBottom
        >
          Regulamin Siłowni
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          1. Niniejszy regulamin określa prawa i obowiązki wszystkich osób
          korzystających z usług siłowni.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          2. Podstawą korzystania z usług siłowni jest wykupienie karnetu lub
          wejścia jednorazowego oraz respektowanie zasad niniejszego regulaminu.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          3. Dokumentem stwierdzającym prawo do korzystania z usług siłowni jest
          aktualny karnet.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          4. Karnet ma charakter imienny i nie może być odstąpiony osobom
          trzecim.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          5. Kierownictwo siłowni zastrzega sobie prawo odmowy sprzedaży karnetu
          lub wejścia jednorazowego bez podania przyczyny.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          6. Opłata za korzystanie z usług siłowni jest pobierana <strong>z góry</strong> przed
          wydaniem karnetu. Opłata nie podlega zwrotom ani w całości, ani w
          części w przypadku rezygnacji lub nie korzystania z usług siłowni.
          Opłata nie podlega także zwrotowi w przypadku wypowiedzenia karnetu ze
          skutkiem natychmiastowym z uwagi na ciężkie naruszenie postanowień
          regulaminu, w szczególności naruszenia zasad współżycia społecznego i
          porządku na terenie siłowni, wnoszenia, spożywania lub pozostawania
          pod wpływem alkoholu lub innych środków odurzających oraz nie
          stosowania się do zaleceń obsługi klubu i zasad bezpiecznego
          korzystania z urządzeń do ćwiczeń.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          7. Osoby korzystające z usług siłowni są zobowiązani do nie zakłócania
          spokoju i porządku w siłowni oraz nie utrudniania innym osobom
          możliwości korzystania z usług siłowni. Klienci siłowni ponoszą pełną
          odpowiedzialność za szkodę wyrządzoną osobom znajdującym sie na
          terenie siłowni, a także za szkodę w mieniu siłowni.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          8. Klienci siłowni zobowiązani są do pozostawienia po sobie ładu,
          porządku oraz korzystania z ręcznika w celu położenia go na tapicerce
          urządzenia do ćwiczeń.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          9. Klient siłowni zobowiązany jest po zakończeniu ćwiczenia do
          odłożenia sprzętu w przeznaczonym do tego miejscu.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          10. W pomieszczeniach przeznaczonych do wykonywania ćwiczeń obowiązuje
          obuwie i strój sportowy.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          11. Siłownia nie ponosi odpowiedzialności za rzeczy osób przechowywane
          w szatni oraz innych miejscach na terenie siłowni.
        </Typography>

        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          16. Rzeczy wartościowe klient wnosi na teren obiektu na własną
          odpowiedzialność. Siłownia nie prowadzi depozytu dla przedmiotów
          wartościowych.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          13. W pomieszczeniach siłowni obowiązuje bezwzględny zakaz palenia
          tytoniu, spożywania i wnoszenia alkoholu, środków odurzających i
          narkotyków, przychodzenia w stanie nietrzeźwym, w stanie odurzenia lub
          pod wpływem narkotyków.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          14. Niniejszy regulamin, a także jego zmiany podaje się do wiadomości
          poprzez wywieszenie ich treści na terenie obiektu.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          15. W zakresie nieuregulowanym niniejszym regulaminem stosuje się
          przepisy kodeksu cywilnego.
        </Typography>
      </CardContent>
    </Card>
          </Box>
        </Modal>
      </div>
  );
}
