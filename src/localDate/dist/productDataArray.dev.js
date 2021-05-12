"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productDataArray = void 0;

var _AmericanCrew = _interopRequireDefault(require("../assets/images/AmericanCrew.jpeg"));

var _Layrite = _interopRequireDefault(require("../assets/images/Layrite.jpg"));

var _PompCo = _interopRequireDefault(require("../assets/images/PompCo.jpg"));

var _Reuzel = _interopRequireDefault(require("../assets/images/Reuzel.jpeg"));

var _Suavecito = _interopRequireDefault(require("../assets/images/Suavecito.png"));

var _Uppercut = _interopRequireDefault(require("../assets/images/Uppercut.jpg"));

var _Schmiere = _interopRequireDefault(require("../assets/images/Schmiere.jpg"));

var _SlickGorilla = _interopRequireDefault(require("../assets/images/SlickGorilla.jpg"));

var _PercyNobleman = _interopRequireDefault(require("../assets/images/PercyNobleman.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productDataArray = [{
  id: 1,
  productName: "AmericanCrew",
  productImage: _AmericanCrew["default"],
  productPrice: 20,
  productWeight: "85g",
  productQuantity: 1,
  freeDelivery: false,
  productCategory: "gel",
  productDescription: "Średnio utrwalający kosmetyk do modelowania fryzury, lekko pogrubiający włosy i nadający im średni połysk. Produkt łatwy w użyciu, przeznaczony do każdego rodzaju włosów, doskonale nadaje się dla osób nie mających wcześniejszego doświadczenia w stylizowaniu własnej fryzury."
}, {
  id: 2,
  productName: "Layrite",
  productImage: _Layrite["default"],
  productPrice: 30,
  productWeight: "120g",
  productQuantity: 1,
  freeDelivery: true,
  productCategory: "paste",
  productDescription: " Matowa pasta do włosów marki Layrite. Łatwo zmywalna dzięki wodnej bazie. Nie wysusza włosów i posiada naturalne matowe wykończenie. Zapewnia średni chwyt, dzięki czemu idealnie nadaje się do fryzur z naturalnym lookiem. Jeśli jesteś fanem stylu messy oraz klimatu klasycznych barber shopów, to nowy produkt Layrite na pewno spełni twoje oczekiwania. "
}, {
  id: 3,
  productName: "Pomp&Co",
  productImage: _PompCo["default"],
  productPrice: 35,
  productWeight: "120ml",
  productQuantity: 1,
  freeDelivery: true,
  productCategory: "paste",
  productDescription: "Matowa pasta do włosów marki Pomp & Co. Krem do włosów na bazie wody o średnio mocnym chwycie i matowym finishu. Produkt na włosach charakteryzuje się subtelnym połyskiem, bardzo łatwą aplikacją i doskonałą teksturą. Krem zawiera w swoim składzie wosk pszczeli, wazelinę i cerezynę przez co gwarantuje doskonałe utrwalenie fryzury o różnej długości. Dzięki glince porcelanowej (Koalin) włosy mają zapewnioną ochronę przed nadmierną łamliwością czy wypadaniem. Białka keratyny w połączeniu z lanoliną sprawiają, że uszkodzona struktura włosów pozostaje odbudowana I zyskuje na elastyczności. Zapach kremu to świeże nuty, wody kolońskiej."
}, {
  id: 4,
  productName: "Reuzel",
  productImage: _Reuzel["default"],
  productPrice: 10,
  productWeight: "35g",
  productQuantity: 1,
  freeDelivery: false,
  productCategory: "pomade",
  productDescription: "Reuzel Matte Clay Pomade wodna pomada, która tworzy miłą w dotyku teksturę włosów, zapewnia mocne, ale elastyczne utrwalenie i matowe wykończenie fryzury. Idealna do krótkich włosów. Stworzona dla aktywnych mężczyzn, którzy potrzebują pewnego utrwalenia fryzury na cały dzień. Reuzel Matte Clay Pomade świetnie poradzi sobie z niezdyscyplinowanymi kosmykami, trudnych w układaniu lokami i wszelkimi sztywnymi, grubymi włosami."
}, {
  id: 5,
  productName: "Suavecito",
  productImage: _Suavecito["default"],
  productPrice: 30,
  productWeight: "113g",
  productQuantity: 1,
  freeDelivery: true,
  productCategory: "pomade",
  productDescription: "Już jest! Kolejna, już kultowa propozycja od kalifornijskiego Suavecito. Wodna Matte Pomade to ekstremalnie łatwa aplikacja i możliwość pracy z włosami przez cały dzień. Idealna do fryzur typu : side part, slick back, faux hawk, messy look."
}, {
  id: 6,
  productName: "UpperCut",
  productImage: _Uppercut["default"],
  productPrice: 25,
  productWeight: "100g",
  productQuantity: 1,
  freeDelivery: false,
  productCategory: "pomade",
  productDescription: "Wodna pomada do włosów marki Uppercut Deluxe. Pomada na bazie wody o mocnym chwycie i łatwej zmywalności. Ten produkt to efekt połączenia klasycznego połysku oraz współczesnego, słodkiego zapachu. Jej utrwalenie jest solidne jednak nie osiada zbyt ciężko na włosach. Deluxe Pomade doskonale definiuje klasycznie, ostre fryzury typu razor fade slick back, pomp czy tradycyjnych executive contour. Deluxe Pomade to pozycja dla tych, którzy potrzebują mocnego produktu, który nie skleja włosów, zachowując przy tym naturalność i elastyczność."
}, {
  id: 7,
  productName: "Schmiere",
  productImage: _Schmiere["default"],
  productPrice: 25,
  productWeight: "140ml",
  productQuantity: 1,
  freeDelivery: false,
  productCategory: "pomade",
  productDescription: "Pomada do włosów marki Schmiere. Pomada na bazie wazeliny o mocnym chwycie i słodkim zapachu gumy do żucia. Schmiere Pomade strong posiada kremową konsystencję, dzięki czemu bardzo łatwo rozgrzewa się w dłoniach i nakłada na włosy. Produkt doskonale sprawdza się w modelowaniu tak normalnych, jak i grubych włosów. Dzięki oryginalnej, niemieckiej recepturze produkt nie zastyga we włosach, sprawiając że bardzo łatwo się je rozczesuje w ciągu dnia. Od teraz wasze pióra będą zawsze wprawiały innych w zdumienie."
}, {
  id: 8,
  productName: "Slick Gorilla",
  productImage: _SlickGorilla["default"],
  productPrice: 20,
  productWeight: "70g",
  productQuantity: 1,
  freeDelivery: false,
  productCategory: "paste",
  productDescription: "Matowa pasta do stylizacji włosów marki Slick Gorilla. Pasta do układania włosów, o wodnej bazie, lekkim/średnim chwycie i matowym finishu. Odpowiednio rozgrzana i nałożona, zapewnia sprężystość i naturalne wykończenie, idealna do fryzur typu messy. Nadaje się do wszelkiego rodzaju włosów. Dodatkowym atutem pomad od Slick Gorilla są naturalne, etycznie pozyskane składniki. Produkt nietestowany na zwierzętach, wegański."
}, {
  id: 9,
  productName: "Percy Nobleman",
  productImage: _PercyNobleman["default"],
  productPrice: 25,
  productWeight: "100ml",
  productQuantity: 1,
  freeDelivery: false,
  productCategory: "pomade",
  productDescription: "Pomada do stylizacji włosów o bardzo mocnym chwycie i matowym efekcie. Matt Clay bazuje na porcelanowej glince, wazelinie i wosku pszczelim, które odpowiadają za wymodelowanie każdej wymagającej fryzury. Zawarty w pomadzie olejek z migdałów dba o elastyczność włosów a jej zapach to bardzo świeże nuty cytrusowe. Pasta składa się w 100% z naturalnych składników bez dodatków chemii, dzięki czemu włosy oraz skóra pozostaję w bardzo dobrej kondycji. Mimo swojej mocy, całkiem szybko rozgrzewa się w dłoniach i łatwo się aplikuje."
}];
exports.productDataArray = productDataArray;