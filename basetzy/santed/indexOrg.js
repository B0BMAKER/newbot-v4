module.exports = async(sock, m, prefix, command, text) => {
if (text.split('|')[0] && text.split('|')[1] == "detik") {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "1 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|1|detik`, description: "SANTED 1 DETIK"},
{title: "2 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|2|detik`, description: "SANTED 2 DETIK"},
{title: "3 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|3|detik`, description: "SANTED 3 DETIK"},
{title: "4 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|4|detik`, description: "SANTED 4 DETIK"},
{title: "5 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|5|detik`, description: "SANTED 5 DETIK"},
{title: "6 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|6|detik`, description: "SANTED 6 DETIK"},
{title: "7 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|7|detik`, description: "SANTED 7 DETIK"},
{title: "8 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|8|detik`, description: "SANTED 8 DETIK"},
{title: "9 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|9|detik`, description: "SANTED 9 DETIK"},
{title: "10 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|10|detik`, description: "SANTED 10 DETIK"},
{title: "11 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|11|detik`, description: "SANTED 11 DETIK"},
{title: "12 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|12|detik`, description: "SANTED 12 DETIK"},
{title: "13 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|13|detik`, description: "SANTED 13 DETIK"},
{title: "14 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|14|detik`, description: "SANTED 14 DETIK"},
{title: "15 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|15|detik`, description: "SANTED 15 DETIK"},
{title: "16 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|16|detik`, description: "SANTED 16 DETIK"},
{title: "17 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|17|detik`, description: "SANTED 17 DETIK"},
{title: "18 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|18|detik`, description: "SANTED 18 DETIK"},
{title: "19 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|19|detik`, description: "SANTED 19 DETIK"},
{title: "20 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|20|detik`, description: "SANTED 20 DETIK"},
{title: "21 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|21|detik`, description: "SANTED 21 DETIK"},
{title: "22 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|22|detik`, description: "SANTED 22 DETIK"},
{title: "23 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|23|detik`, description: "SANTED 23 DETIK"},
{title: "24 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|24|detik`, description: "SANTED 24 DETIK"},
{title: "25 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|25|detik`, description: "SANTED 25 DETIK"},
{title: "26 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|26|detik`, description: "SANTED 26 DETIK"},
{title: "27 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|27|detik`, description: "SANTED 27 DETIK"},
{title: "28 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|28|detik`, description: "SANTED 28 DETIK"},
{title: "29 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|29|detik`, description: "SANTED 29 DETIK"},
{title: "30 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|30|detik`, description: "SANTED 30 DETIK"},
{title: "31 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|31|detik`, description: "SANTED 31 DETIK"},
{title: "32 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|32|detik`, description: "SANTED 32 DETIK"},
{title: "33 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|33|detik`, description: "SANTED 33 DETIK"},
{title: "34 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|34|detik`, description: "SANTED 34 DETIK"},
{title: "35 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|35|detik`, description: "SANTED 35 DETIK"},
{title: "36 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|36|detik`, description: "SANTED 36 DETIK"},
{title: "37 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|37|detik`, description: "SANTED 37 DETIK"},
{title: "38 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|38|detik`, description: "SANTED 38 DETIK"},
{title: "39 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|39|detik`, description: "SANTED 39 DETIK"},
{title: "40 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|40|detik`, description: "SANTED 40 DETIK"},
{title: "41 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|41|detik`, description: "SANTED 41 DETIK"},
{title: "42 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|42|detik`, description: "SANTED 42 DETIK"},
{title: "43 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|43|detik`, description: "SANTED 43 DETIK"},
{title: "44 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|44|detik`, description: "SANTED 44 DETIK"},
{title: "45 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|45|detik`, description: "SANTED 45 DETIK"},
{title: "46 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|46|detik`, description: "SANTED 46 DETIK"},
{title: "47 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|47|detik`, description: "SANTED 47 DETIK"},
{title: "48 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|48|detik`, description: "SANTED 48 DETIK"},
{title: "49 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|49|detik`, description: "SANTED 49 DETIK"},
{title: "50 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|50|detik`, description: "SANTED 50 DETIK"},
{title: "51 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|51|detik`, description: "SANTED 51 DETIK"},
{title: "52 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|52|detik`, description: "SANTED 52 DETIK"},
{title: "53 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|53|detik`, description: "SANTED 53 DETIK"},
{title: "54 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|54|detik`, description: "SANTED 54 DETIK"},
{title: "55 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|55|detik`, description: "SANTED 55 DETIK"},
{title: "56 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|56|detik`, description: "SANTED 56 DETIK"},
{title: "57 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|57|detik`, description: "SANTED 57 DETIK"},
{title: "58 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|58|detik`, description: "SANTED 58 DETIK"},
{title: "59 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|59|detik`, description: "SANTED 59 DETIK"},
{title: "60 DETIK", rowId: `${prefix + command} ${text.split('|')[0]}|60|detik`, description: "SANTED 60 DETIK"},
]}]
const listMessage = { text: "SANTED DETIK", buttonText: "FOUND", sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
} else if (text.split('|')[0] && text.split('|')[1] == "menit") {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "1 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|1|menit`, description: "SANTED 1 MENIT"},
{title: "2 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|2|menit`, description: "SANTED 2 MENIT"},
{title: "3 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|3|menit`, description: "SANTED 3 MENIT"},
{title: "4 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|4|menit`, description: "SANTED 4 MENIT"},
{title: "5 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|5|menit`, description: "SANTED 5 MENIT"},
{title: "6 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|6|menit`, description: "SANTED 6 MENIT"},
{title: "7 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|7|menit`, description: "SANTED 7 MENIT"},
{title: "8 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|8|menit`, description: "SANTED 8 MENIT"},
{title: "9 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|9|menit`, description: "SANTED 9 MENIT"},
{title: "10 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|10|menit`, description: "SANTED 10 MENIT"},
{title: "11 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|11|menit`, description: "SANTED 11 MENIT"},
{title: "12 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|12|menit`, description: "SANTED 12 MENIT"},
{title: "13 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|13|menit`, description: "SANTED 13 MENIT"},
{title: "14 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|14|menit`, description: "SANTED 14 MENIT"},
{title: "15 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|15|menit`, description: "SANTED 15 MENIT"},
{title: "16 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|16|menit`, description: "SANTED 16 MENIT"},
{title: "17 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|17|menit`, description: "SANTED 17 MENIT"},
{title: "18 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|18|menit`, description: "SANTED 18 MENIT"},
{title: "19 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|19|menit`, description: "SANTED 19 MENIT"},
{title: "20 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|20|menit`, description: "SANTED 20 MENIT"},
{title: "21 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|21|menit`, description: "SANTED 21 MENIT"},
{title: "22 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|22|menit`, description: "SANTED 22 MENIT"},
{title: "23 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|23|menit`, description: "SANTED 23 MENIT"},
{title: "24 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|24|menit`, description: "SANTED 24 MENIT"},
{title: "25 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|25|menit`, description: "SANTED 25 MENIT"},
{title: "26 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|26|menit`, description: "SANTED 26 MENIT"},
{title: "27 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|27|menit`, description: "SANTED 27 MENIT"},
{title: "28 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|28|menit`, description: "SANTED 28 MENIT"},
{title: "29 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|29|menit`, description: "SANTED 29 MENIT"},
{title: "30 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|30|menit`, description: "SANTED 30 MENIT"},
{title: "31 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|31|menit`, description: "SANTED 31 MENIT"},
{title: "32 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|32|menit`, description: "SANTED 32 MENIT"},
{title: "33 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|33|menit`, description: "SANTED 33 MENIT"},
{title: "34 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|34|menit`, description: "SANTED 34 MENIT"},
{title: "35 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|35|menit`, description: "SANTED 35 MENIT"},
{title: "36 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|36|menit`, description: "SANTED 36 MENIT"},
{title: "37 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|37|menit`, description: "SANTED 37 MENIT"},
{title: "38 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|38|menit`, description: "SANTED 38 MENIT"},
{title: "39 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|39|menit`, description: "SANTED 39 MENIT"},
{title: "40 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|40|menit`, description: "SANTED 40 MENIT"},
{title: "41 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|41|menit`, description: "SANTED 41 MENIT"},
{title: "42 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|42|menit`, description: "SANTED 42 MENIT"},
{title: "43 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|43|menit`, description: "SANTED 43 MENIT"},
{title: "44 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|44|menit`, description: "SANTED 44 MENIT"},
{title: "45 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|45|menit`, description: "SANTED 45 MENIT"},
{title: "46 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|46|menit`, description: "SANTED 46 MENIT"},
{title: "47 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|47|menit`, description: "SANTED 47 MENIT"},
{title: "48 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|48|menit`, description: "SANTED 48 MENIT"},
{title: "49 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|49|menit`, description: "SANTED 49 MENIT"},
{title: "50 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|50|menit`, description: "SANTED 50 MENIT"},
{title: "51 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|51|menit`, description: "SANTED 51 MENIT"},
{title: "52 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|52|menit`, description: "SANTED 52 MENIT"},
{title: "53 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|53|menit`, description: "SANTED 53 MENIT"},
{title: "54 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|54|menit`, description: "SANTED 54 MENIT"},
{title: "55 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|55|menit`, description: "SANTED 55 MENIT"},
{title: "56 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|56|menit`, description: "SANTED 56 MENIT"},
{title: "57 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|57|menit`, description: "SANTED 57 MENIT"},
{title: "58 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|58|menit`, description: "SANTED 58 MENIT"},
{title: "59 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|59|menit`, description: "SANTED 59 MENIT"},
{title: "60 MENIT", rowId: `${prefix + command} ${text.split('|')[0]}|60|menit`, description: "SANTED 60 MENIT"},
]}]
const listMessage = { text: "SANTED MENIT", buttonText: "FOUND", sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
} else if (text.split('|')[0] && text.split('|')[1] == "jam") {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "1 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|1|jam`, description: "SANTED 1 JAM"},
{title: "2 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|2|jam`, description: "SANTED 2 JAM"},
{title: "3 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|3|jam`, description: "SANTED 3 JAM"},
{title: "4 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|4|jam`, description: "SANTED 4 JAM"},
{title: "5 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|5|jam`, description: "SANTED 5 JAM"},
{title: "6 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|6|jam`, description: "SANTED 6 JAM"},
{title: "7 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|7|jam`, description: "SANTED 7 JAM"},
{title: "8 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|8|jam`, description: "SANTED 8 JAM"},
{title: "9 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|9|jam`, description: "SANTED 9 JAM"},
{title: "10 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|10|jam`, description: "SANTED 10 JAM"},
{title: "11 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|11|jam`, description: "SANTED 11 JAM"},
{title: "12 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|12|jam`, description: "SANTED 12 JAM"},
{title: "13 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|13|jam`, description: "SANTED 13 JAM"},
{title: "14 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|14|jam`, description: "SANTED 14 JAM"},
{title: "15 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|15|jam`, description: "SANTED 15 JAM"},
{title: "16 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|16|jam`, description: "SANTED 16 JAM"},
{title: "17 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|17|jam`, description: "SANTED 17 JAM"},
{title: "18 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|18|jam`, description: "SANTED 18 JAM"},
{title: "19 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|19|jam`, description: "SANTED 19 JAM"},
{title: "20 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|20|jam`, description: "SANTED 20 JAM"},
{title: "21 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|21|jam`, description: "SANTED 21 JAM"},
{title: "22 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|22|jam`, description: "SANTED 22 JAM"},
{title: "23 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|23|jam`, description: "SANTED 23 JAM"},
{title: "24 JAM", rowId: `${prefix + command} ${text.split('|')[0]}|24|jam`, description: "SANTED 24 JAM"},
]}]
const listMessage = { text: "SANTED JAM", buttonText: "FOUND", sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
} else if (text.split('|')[0] && text.split('|')[1] == "hari") {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "1 HARI", rowId: `${prefix + command} ${text.split('|')[0]}|1|hari`, description: "SANTED 1 HARI"},
{title: "2 HARI", rowId: `${prefix + command} ${text.split('|')[0]}|2|hari`, description: "SANTED 2 HARI"},
{title: "3 HARI", rowId: `${prefix + command} ${text.split('|')[0]}|3|hari`, description: "SANTED 3 HARI"},
{title: "4 HARI", rowId: `${prefix + command} ${text.split('|')[0]}|4|hari`, description: "SANTED 4 HARI"},
{title: "5 HARI", rowId: `${prefix + command} ${text.split('|')[0]}|5|hari`, description: "SANTED 5 HARI"},
{title: "6 HARI", rowId: `${prefix + command} ${text.split('|')[0]}|6|hari`, description: "SANTED 6 HARI"},
{title: "7 HARI", rowId: `${prefix + command} ${text.split('|')[0]}|7|hari`, description: "SANTED 7 HARI"},
]}]
const listMessage = { text: "SANTED HARI", buttonText: "FOUND", sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
}
}