(function() {
  var i, j, k, l, m, n, xx;

  window.configDefault = "text|tt7|5000\ntext|unoDeCada|0\ntext|tiempoRespuestaMemoria|180000\ntext|tiempoPreparacion|3\ntext|t7|1750\ntext|cMemoria0|10\ntext|tm1|5000\ntext|cMemoria1|10\ntext|tm2|2700\ntext|cMemoria2|6\ntext|tm3|1750\ntext|cMemoria3|10\ntext|tm4|1750\ntext|cMemoria4|10\ntext|tm5|5000\ntext|cMemoria5|6\ntext|tm6|3350\ntext|cMemoria6|10\ntext|tm7|5000\ntext|cMemoria7|10\ntext|tm8|6000\ntext|cMemoria8|6\ntext|tm9|800\ntext|cMemoria9|10\ntext|tm10|2350\ntext|cMemoria10|10\ntext|tm11|1750\ntext|cMemoria11|10\ncheckbox|constantMixTime|false\ntext|tm12|5000\ntext|cMemoria12|10\ntext|t0|1500\ntext|tt0|4000\ncheckbox|facilLogica|false\ntext|t1|1000\ntext|tt1|2000\ntext|sumaMin|1\ntext|sumaMax|20\ntext|restaMin|1\ntext|restaMax|10\ntext|multiMin|2\ntext|multiMax|10\ntext|t2|700\ntext|tt2|2000\ntext|periX|700\ntext|periY|10\ntext|t3|500\ntext|tt3|1000\ntext|binX|5\ntext|binY|5\ntext|t4|500\ntext|tt4|1500\ntext|t5|500\ntext|tt5|2000\ncheckbox|allReaction|false\ntext|t6|600\ntext|tt6|2000\ntext|espacios4|180\ntext|t8|3000\ntext|tt8|1000\ntext|t9|500\ntext|tt9|20000\ntext|pasadasSumFlash|5\ntext|minSumFlash|1\ntext|maxSumFlash|9\ntext|t10|59000\ntext|tt10|1000\ntext|t11|9000\ntext|tt11|1000\ncheckbox|lineas_Adicionales|false\ntext|t12|119000\ntext|tt12|1000\ntext|cantProposiciones|4\ncheckbox|invertirProposiciones|true\ncheckbox|desordenarProposiciones|true\ntext|t13|59000\ntext|tt13|1000\ntext|t14|59000\ntext|tt14|1000\ntext|width|10\ntext|height|10\ntext|zoomLaberinto|0.5\ntext|t15|180000\ntext|tt15|4000\ntext|sumaMinL|1\ntext|sumaMaxL|20\ntext|restaMinL|1\ntext|restaMaxL|10\ntext|multiMinL|2\ntext|multiMaxL|10\ntext|t16|180000\ntext|tt16|4000\ntext|t17|180000\ntext|tt17|4000\ntext|t18|600000\ntext|tt18|4000";

  window.ayudaSinestesia = "";

  window.frases = [];

  window.articulos = [];

  window.adjetivos = [];

  window.ojosImagenes = [];

  window.ojosLeyendas = [];

  window.memoriaM1 = [];

  window.memoriaM2 = [];

  window.memoriaM3 = [];

  window.memoriaM4 = [];

  window.alfabeto = [];

  for (xx = i = 0; i <= 25; xx = ++i) {
    window.alfabeto[xx] = [];
  }

  window.alfabeto[0][0] = "A";

  window.alfabeto[0][1] = "rgb(0,0,180)";

  window.alfabeto[1][0] = "B";

  window.alfabeto[1][1] = "rgb(175,13,102)";

  window.alfabeto[2][0] = "C";

  window.alfabeto[2][1] = "rgb(146,248,70)";

  window.alfabeto[3][0] = "D";

  window.alfabeto[3][1] = "rgb(255,200,47)";

  window.alfabeto[4][0] = "E";

  window.alfabeto[4][1] = "rgb(255,118,0)";

  window.alfabeto[5][0] = "F";

  window.alfabeto[5][1] = "rgb(255,152,213)";

  window.alfabeto[6][0] = "G";

  window.alfabeto[6][1] = "rgb(235,235,222)";

  window.alfabeto[7][0] = "H";

  window.alfabeto[7][1] = "rgb(100,100,100)";

  window.alfabeto[8][0] = "I";

  window.alfabeto[8][1] = "rgb(255,255,0)";

  window.alfabeto[9][0] = "j";

  window.alfabeto[9][1] = "rgb(255,255,150)";

  window.alfabeto[10][0] = "K";

  window.alfabeto[10][1] = "rgb(55,19,112)";

  window.alfabeto[11][0] = "L";

  window.alfabeto[11][1] = "rgb(202,62,94)";

  window.alfabeto[12][0] = "M";

  window.alfabeto[12][1] = "rgb(205,145,63)";

  window.alfabeto[13][0] = "N";

  window.alfabeto[13][1] = "rgb(12,75,100)";

  window.alfabeto[14][0] = "O";

  window.alfabeto[14][1] = "rgb(255,0,0)";

  window.alfabeto[15][0] = "P";

  window.alfabeto[15][1] = "rgb(175,155,50)";

  window.alfabeto[16][0] = "Q";

  window.alfabeto[16][1] = "rgb(185,185,185)";

  window.alfabeto[17][0] = "R";

  window.alfabeto[17][1] = "rgb(37,70,25)";

  window.alfabeto[18][0] = "S";

  window.alfabeto[18][1] = "rgb(121,33,135)";

  window.alfabeto[19][0] = "T";

  window.alfabeto[19][1] = "rgb(83,140,208)";

  window.alfabeto[20][0] = "U";

  window.alfabeto[20][1] = "rgb(0,154,37)";

  window.alfabeto[21][0] = "V";

  window.alfabeto[21][1] = "rgb(178,220,205)";

  window.alfabeto[22][0] = "W";

  window.alfabeto[22][1] = "rgb(169,34,0)";

  window.alfabeto[23][0] = "X";

  window.alfabeto[23][1] = "rgb(0,0,74)";

  window.alfabeto[24][0] = "Y";

  window.alfabeto[24][1] = "rgb(175,200,74)";

  window.alfabeto[25][0] = "Z";

  window.alfabeto[25][1] = "rgb(63,25,12)";

  window.palabras = [];

  window.cartas = [];

  window.figuras = [];

  window.PAO = [];

  window.numeros = [];

  for (xx = j = 0; j <= 99; xx = ++j) {
    window.numeros[xx] = xx;
  }

  window.YEAR = [];

  for (xx = k = 0; k <= 199; xx = ++k) {
    window.YEAR[xx] = [];
  }

  window.YEAR[0][0] = 1900;

  window.YEAR[0][1] = 0;

  window.YEAR[1][0] = 1901;

  window.YEAR[1][1] = 1;

  window.YEAR[2][0] = 1902;

  window.YEAR[2][1] = 2;

  window.YEAR[3][0] = 1903;

  window.YEAR[3][1] = 3;

  window.YEAR[4][0] = 1904;

  window.YEAR[4][1] = 5;

  window.YEAR[5][0] = 1905;

  window.YEAR[5][1] = 6;

  window.YEAR[6][0] = 1906;

  window.YEAR[6][1] = 0;

  window.YEAR[7][0] = 1907;

  window.YEAR[7][1] = 1;

  window.YEAR[8][0] = 1908;

  window.YEAR[8][1] = 3;

  window.YEAR[9][0] = 1909;

  window.YEAR[9][1] = 4;

  window.YEAR[10][0] = 1910;

  window.YEAR[10][1] = 5;

  window.YEAR[11][0] = 1911;

  window.YEAR[11][1] = 6;

  window.YEAR[12][0] = 1912;

  window.YEAR[12][1] = 1;

  window.YEAR[13][0] = 1913;

  window.YEAR[13][1] = 2;

  window.YEAR[14][0] = 1914;

  window.YEAR[14][1] = 3;

  window.YEAR[15][0] = 1915;

  window.YEAR[15][1] = 4;

  window.YEAR[16][0] = 1916;

  window.YEAR[16][1] = 6;

  window.YEAR[17][0] = 1917;

  window.YEAR[17][1] = 0;

  window.YEAR[18][0] = 1918;

  window.YEAR[18][1] = 1;

  window.YEAR[19][0] = 1919;

  window.YEAR[19][1] = 2;

  window.YEAR[20][0] = 1920;

  window.YEAR[20][1] = 4;

  window.YEAR[21][0] = 1921;

  window.YEAR[21][1] = 5;

  window.YEAR[22][0] = 1922;

  window.YEAR[22][1] = 6;

  window.YEAR[23][0] = 1923;

  window.YEAR[23][1] = 0;

  window.YEAR[24][0] = 1924;

  window.YEAR[24][1] = 2;

  window.YEAR[25][0] = 1925;

  window.YEAR[25][1] = 3;

  window.YEAR[26][0] = 1926;

  window.YEAR[26][1] = 4;

  window.YEAR[27][0] = 1927;

  window.YEAR[27][1] = 5;

  window.YEAR[28][0] = 1928;

  window.YEAR[28][1] = 0;

  window.YEAR[29][0] = 1929;

  window.YEAR[29][1] = 1;

  window.YEAR[30][0] = 1930;

  window.YEAR[30][1] = 2;

  window.YEAR[31][0] = 1931;

  window.YEAR[31][1] = 3;

  window.YEAR[32][0] = 1932;

  window.YEAR[32][1] = 5;

  window.YEAR[33][0] = 1933;

  window.YEAR[33][1] = 6;

  window.YEAR[34][0] = 1934;

  window.YEAR[34][1] = 0;

  window.YEAR[35][0] = 1935;

  window.YEAR[35][1] = 1;

  window.YEAR[36][0] = 1936;

  window.YEAR[36][1] = 3;

  window.YEAR[37][0] = 1937;

  window.YEAR[37][1] = 4;

  window.YEAR[38][0] = 1938;

  window.YEAR[38][1] = 5;

  window.YEAR[39][0] = 1939;

  window.YEAR[39][1] = 6;

  window.YEAR[40][0] = 1940;

  window.YEAR[40][1] = 1;

  window.YEAR[41][0] = 1941;

  window.YEAR[41][1] = 2;

  window.YEAR[42][0] = 1942;

  window.YEAR[42][1] = 3;

  window.YEAR[43][0] = 1943;

  window.YEAR[43][1] = 4;

  window.YEAR[44][0] = 1944;

  window.YEAR[44][1] = 6;

  window.YEAR[45][0] = 1945;

  window.YEAR[45][1] = 0;

  window.YEAR[46][0] = 1946;

  window.YEAR[46][1] = 1;

  window.YEAR[47][0] = 1947;

  window.YEAR[47][1] = 2;

  window.YEAR[48][0] = 1948;

  window.YEAR[48][1] = 4;

  window.YEAR[49][0] = 1949;

  window.YEAR[49][1] = 5;

  window.YEAR[50][0] = 1950;

  window.YEAR[50][1] = 6;

  window.YEAR[51][0] = 1951;

  window.YEAR[51][1] = 0;

  window.YEAR[52][0] = 1952;

  window.YEAR[52][1] = 2;

  window.YEAR[53][0] = 1953;

  window.YEAR[53][1] = 3;

  window.YEAR[54][0] = 1954;

  window.YEAR[54][1] = 4;

  window.YEAR[55][0] = 1955;

  window.YEAR[55][1] = 5;

  window.YEAR[56][0] = 1956;

  window.YEAR[56][1] = 0;

  window.YEAR[57][0] = 1957;

  window.YEAR[57][1] = 1;

  window.YEAR[58][0] = 1958;

  window.YEAR[58][1] = 2;

  window.YEAR[59][0] = 1959;

  window.YEAR[59][1] = 3;

  window.YEAR[60][0] = 1960;

  window.YEAR[60][1] = 5;

  window.YEAR[61][0] = 1961;

  window.YEAR[61][1] = 6;

  window.YEAR[62][0] = 1962;

  window.YEAR[62][1] = 0;

  window.YEAR[63][0] = 1963;

  window.YEAR[63][1] = 1;

  window.YEAR[64][0] = 1964;

  window.YEAR[64][1] = 3;

  window.YEAR[65][0] = 1965;

  window.YEAR[65][1] = 4;

  window.YEAR[66][0] = 1966;

  window.YEAR[66][1] = 5;

  window.YEAR[67][0] = 1967;

  window.YEAR[67][1] = 6;

  window.YEAR[68][0] = 1968;

  window.YEAR[68][1] = 1;

  window.YEAR[69][0] = 1969;

  window.YEAR[69][1] = 2;

  window.YEAR[70][0] = 1970;

  window.YEAR[70][1] = 3;

  window.YEAR[71][0] = 1971;

  window.YEAR[71][1] = 4;

  window.YEAR[72][0] = 1972;

  window.YEAR[72][1] = 6;

  window.YEAR[73][0] = 1973;

  window.YEAR[73][1] = 0;

  window.YEAR[74][0] = 1974;

  window.YEAR[74][1] = 1;

  window.YEAR[75][0] = 1975;

  window.YEAR[75][1] = 2;

  window.YEAR[76][0] = 1976;

  window.YEAR[76][1] = 4;

  window.YEAR[77][0] = 1977;

  window.YEAR[77][1] = 5;

  window.YEAR[78][0] = 1978;

  window.YEAR[78][1] = 6;

  window.YEAR[79][0] = 1979;

  window.YEAR[79][1] = 0;

  window.YEAR[80][0] = 1980;

  window.YEAR[80][1] = 2;

  window.YEAR[81][0] = 1981;

  window.YEAR[81][1] = 3;

  window.YEAR[82][0] = 1982;

  window.YEAR[82][1] = 4;

  window.YEAR[83][0] = 1983;

  window.YEAR[83][1] = 5;

  window.YEAR[84][0] = 1984;

  window.YEAR[84][1] = 0;

  window.YEAR[85][0] = 1985;

  window.YEAR[85][1] = 1;

  window.YEAR[86][0] = 1986;

  window.YEAR[86][1] = 2;

  window.YEAR[87][0] = 1987;

  window.YEAR[87][1] = 3;

  window.YEAR[88][0] = 1988;

  window.YEAR[88][1] = 5;

  window.YEAR[89][0] = 1989;

  window.YEAR[89][1] = 6;

  window.YEAR[90][0] = 1990;

  window.YEAR[90][1] = 0;

  window.YEAR[91][0] = 1991;

  window.YEAR[91][1] = 1;

  window.YEAR[92][0] = 1992;

  window.YEAR[92][1] = 3;

  window.YEAR[93][0] = 1993;

  window.YEAR[93][1] = 4;

  window.YEAR[94][0] = 1994;

  window.YEAR[94][1] = 5;

  window.YEAR[95][0] = 1995;

  window.YEAR[95][1] = 6;

  window.YEAR[96][0] = 1996;

  window.YEAR[96][1] = 1;

  window.YEAR[97][0] = 1997;

  window.YEAR[97][1] = 2;

  window.YEAR[98][0] = 1998;

  window.YEAR[98][1] = 3;

  window.YEAR[99][0] = 1999;

  window.YEAR[99][1] = 4;

  window.YEAR[100][0] = 2000;

  window.YEAR[100][1] = 6;

  window.YEAR[101][0] = 2001;

  window.YEAR[101][1] = 0;

  window.YEAR[102][0] = 2002;

  window.YEAR[102][1] = 1;

  window.YEAR[103][0] = 2003;

  window.YEAR[103][1] = 2;

  window.YEAR[104][0] = 2004;

  window.YEAR[104][1] = 4;

  window.YEAR[105][0] = 2005;

  window.YEAR[105][1] = 5;

  window.YEAR[106][0] = 2006;

  window.YEAR[106][1] = 6;

  window.YEAR[107][0] = 2007;

  window.YEAR[107][1] = 0;

  window.YEAR[108][0] = 2008;

  window.YEAR[108][1] = 2;

  window.YEAR[109][0] = 2009;

  window.YEAR[109][1] = 3;

  window.YEAR[110][0] = 2010;

  window.YEAR[110][1] = 4;

  window.YEAR[111][0] = 2011;

  window.YEAR[111][1] = 5;

  window.YEAR[112][0] = 2012;

  window.YEAR[112][1] = 0;

  window.YEAR[113][0] = 2013;

  window.YEAR[113][1] = 1;

  window.YEAR[114][0] = 2014;

  window.YEAR[114][1] = 2;

  window.YEAR[115][0] = 2015;

  window.YEAR[115][1] = 3;

  window.YEAR[116][0] = 2016;

  window.YEAR[116][1] = 5;

  window.YEAR[117][0] = 2017;

  window.YEAR[117][1] = 6;

  window.YEAR[118][0] = 2018;

  window.YEAR[118][1] = 0;

  window.YEAR[119][0] = 2019;

  window.YEAR[119][1] = 1;

  window.YEAR[120][0] = 2020;

  window.YEAR[120][1] = 3;

  window.YEAR[121][0] = 2021;

  window.YEAR[121][1] = 4;

  window.YEAR[122][0] = 2022;

  window.YEAR[122][1] = 5;

  window.YEAR[123][0] = 2023;

  window.YEAR[123][1] = 6;

  window.YEAR[124][0] = 2024;

  window.YEAR[124][1] = 1;

  window.YEAR[125][0] = 2025;

  window.YEAR[125][1] = 2;

  window.YEAR[126][0] = 2026;

  window.YEAR[126][1] = 3;

  window.YEAR[127][0] = 2027;

  window.YEAR[127][1] = 4;

  window.YEAR[128][0] = 2028;

  window.YEAR[128][1] = 6;

  window.YEAR[129][0] = 2029;

  window.YEAR[129][1] = 0;

  window.YEAR[130][0] = 2030;

  window.YEAR[130][1] = 1;

  window.YEAR[131][0] = 2031;

  window.YEAR[131][1] = 2;

  window.YEAR[132][0] = 2032;

  window.YEAR[132][1] = 4;

  window.YEAR[133][0] = 2033;

  window.YEAR[133][1] = 5;

  window.YEAR[134][0] = 2034;

  window.YEAR[134][1] = 6;

  window.YEAR[135][0] = 2035;

  window.YEAR[135][1] = 0;

  window.YEAR[136][0] = 2036;

  window.YEAR[136][1] = 2;

  window.YEAR[137][0] = 2037;

  window.YEAR[137][1] = 3;

  window.YEAR[138][0] = 2038;

  window.YEAR[138][1] = 4;

  window.YEAR[139][0] = 2039;

  window.YEAR[139][1] = 5;

  window.YEAR[140][0] = 2040;

  window.YEAR[140][1] = 0;

  window.YEAR[141][0] = 2041;

  window.YEAR[141][1] = 1;

  window.YEAR[142][0] = 2042;

  window.YEAR[142][1] = 2;

  window.YEAR[143][0] = 2043;

  window.YEAR[143][1] = 3;

  window.YEAR[144][0] = 2044;

  window.YEAR[144][1] = 5;

  window.YEAR[145][0] = 2045;

  window.YEAR[145][1] = 6;

  window.YEAR[146][0] = 2046;

  window.YEAR[146][1] = 0;

  window.YEAR[147][0] = 2047;

  window.YEAR[147][1] = 1;

  window.YEAR[148][0] = 2048;

  window.YEAR[148][1] = 3;

  window.YEAR[149][0] = 2049;

  window.YEAR[149][1] = 4;

  window.YEAR[150][0] = 2050;

  window.YEAR[150][1] = 5;

  window.YEAR[151][0] = 2051;

  window.YEAR[151][1] = 6;

  window.YEAR[152][0] = 2052;

  window.YEAR[152][1] = 1;

  window.YEAR[153][0] = 2053;

  window.YEAR[153][1] = 2;

  window.YEAR[154][0] = 2054;

  window.YEAR[154][1] = 3;

  window.YEAR[155][0] = 2055;

  window.YEAR[155][1] = 4;

  window.YEAR[156][0] = 2056;

  window.YEAR[156][1] = 6;

  window.YEAR[157][0] = 2057;

  window.YEAR[157][1] = 0;

  window.YEAR[158][0] = 2058;

  window.YEAR[158][1] = 1;

  window.YEAR[159][0] = 2059;

  window.YEAR[159][1] = 2;

  window.YEAR[160][0] = 2060;

  window.YEAR[160][1] = 4;

  window.YEAR[161][0] = 2061;

  window.YEAR[161][1] = 5;

  window.YEAR[162][0] = 2062;

  window.YEAR[162][1] = 6;

  window.YEAR[163][0] = 2063;

  window.YEAR[163][1] = 0;

  window.YEAR[164][0] = 2064;

  window.YEAR[164][1] = 2;

  window.YEAR[165][0] = 2065;

  window.YEAR[165][1] = 3;

  window.YEAR[166][0] = 2066;

  window.YEAR[166][1] = 4;

  window.YEAR[167][0] = 2067;

  window.YEAR[167][1] = 5;

  window.YEAR[168][0] = 2068;

  window.YEAR[168][1] = 0;

  window.YEAR[169][0] = 2069;

  window.YEAR[169][1] = 1;

  window.YEAR[170][0] = 2070;

  window.YEAR[170][1] = 2;

  window.YEAR[171][0] = 2071;

  window.YEAR[171][1] = 3;

  window.YEAR[172][0] = 2072;

  window.YEAR[172][1] = 5;

  window.YEAR[173][0] = 2073;

  window.YEAR[173][1] = 6;

  window.YEAR[174][0] = 2074;

  window.YEAR[174][1] = 0;

  window.YEAR[175][0] = 2075;

  window.YEAR[175][1] = 1;

  window.YEAR[176][0] = 2076;

  window.YEAR[176][1] = 3;

  window.YEAR[177][0] = 2077;

  window.YEAR[177][1] = 4;

  window.YEAR[178][0] = 2078;

  window.YEAR[178][1] = 5;

  window.YEAR[179][0] = 2079;

  window.YEAR[179][1] = 6;

  window.YEAR[180][0] = 2080;

  window.YEAR[180][1] = 1;

  window.YEAR[181][0] = 2081;

  window.YEAR[181][1] = 2;

  window.YEAR[182][0] = 2082;

  window.YEAR[182][1] = 3;

  window.YEAR[183][0] = 2083;

  window.YEAR[183][1] = 4;

  window.YEAR[184][0] = 2084;

  window.YEAR[184][1] = 6;

  window.YEAR[185][0] = 2085;

  window.YEAR[185][1] = 0;

  window.YEAR[186][0] = 2086;

  window.YEAR[186][1] = 1;

  window.YEAR[187][0] = 2087;

  window.YEAR[187][1] = 2;

  window.YEAR[188][0] = 2088;

  window.YEAR[188][1] = 4;

  window.YEAR[189][0] = 2089;

  window.YEAR[189][1] = 5;

  window.YEAR[190][0] = 2090;

  window.YEAR[190][1] = 6;

  window.YEAR[191][0] = 2091;

  window.YEAR[191][1] = 0;

  window.YEAR[192][0] = 2092;

  window.YEAR[192][1] = 2;

  window.YEAR[193][0] = 2093;

  window.YEAR[193][1] = 3;

  window.YEAR[194][0] = 2094;

  window.YEAR[194][1] = 4;

  window.YEAR[195][0] = 2095;

  window.YEAR[195][1] = 5;

  window.YEAR[196][0] = 2096;

  window.YEAR[196][1] = 0;

  window.YEAR[197][0] = 2097;

  window.YEAR[197][1] = 1;

  window.YEAR[198][0] = 2098;

  window.YEAR[198][1] = 2;

  window.YEAR[199][0] = 2099;

  window.YEAR[199][1] = 3;

  window.MONTH = [];

  for (xx = l = 0; l <= 11; xx = ++l) {
    window.MONTH[xx] = [];
  }

  window.MONTH[0][0] = 1;

  window.MONTH[0][1] = "ene";

  window.MONTH[1][0] = 4;

  window.MONTH[1][1] = "feb";

  window.MONTH[2][0] = 4;

  window.MONTH[2][1] = "mar";

  window.MONTH[3][0] = 0;

  window.MONTH[3][1] = "abr";

  window.MONTH[4][0] = 2;

  window.MONTH[4][1] = "may";

  window.MONTH[5][0] = 5;

  window.MONTH[5][1] = "jun";

  window.MONTH[6][0] = 0;

  window.MONTH[6][1] = "jul";

  window.MONTH[7][0] = 3;

  window.MONTH[7][1] = "ago";

  window.MONTH[8][0] = 6;

  window.MONTH[8][1] = "sep";

  window.MONTH[9][0] = 1;

  window.MONTH[9][1] = "oct";

  window.MONTH[10][0] = 4;

  window.MONTH[10][1] = "nov";

  window.MONTH[11][0] = 6;

  window.MONTH[11][1] = "dic";

  window.DAY = [];

  for (xx = m = 0; m <= 6; xx = ++m) {
    window.DAY[xx] = [];
  }

  window.DAY[0][0] = 1;

  window.DAY[0][1] = "Domingo";

  window.DAY[1][0] = 2;

  window.DAY[1][1] = "Lunes";

  window.DAY[2][0] = 3;

  window.DAY[2][1] = "Martes";

  window.DAY[3][0] = 4;

  window.DAY[3][1] = "Miercoles";

  window.DAY[4][0] = 5;

  window.DAY[4][1] = "Jueves";

  window.DAY[5][0] = 6;

  window.DAY[5][1] = "Viernes";

  window.DAY[6][0] = 0;

  window.DAY[6][1] = "Sabado";

  window.nombresHombre = [];

  window.nombresMujer = [];

  window.paises = [];

  window.emociones = [];

  xx = 0;

  for (xx = n = 0; n <= 38; xx = ++n) {
    window.emociones[xx] = [];
  }

}).call(this);

