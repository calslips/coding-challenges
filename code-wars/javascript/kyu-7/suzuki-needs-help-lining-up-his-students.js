/*
Today Suzuki will be interviewing his students to ensure they
are progressing in their training. He decided to schedule the
interviews based on the length of the students name in descending
order. The students will line up and wait for their turn.

You will be given a string of student names. Sort them and return
a list of names in descending order.

Names of equal length will be returned in reverse alphabetical
order (Z->A)

Parameters: a str
Returns: an array of strs
Examples:
  let s1 = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi';
  let lst1 = ['Takehiko','Takayuki','Takahiro','Takeshi','Takeshi','Takashi','Tadashi','Takeo','Takao'];
  lineupStudents(s1), lst1

  let s2 = 'Michio Miki Mikio Minori Minoru Mitsuo Mitsuru Nao Naoki Naoko Noboru Nobu Nobuo Nobuyuki Nori Norio Osamu Rafu Raiden Ringo Rokuro Ronin Ryo Ryoichi Ryota Ryozo Ryuichi Ryuu Saburo Sadao Samuru Satoru Satoshi Seiichi Seiji Senichi Shichiro Shig Shigekazu Shigeo Shigeru Shima Shin Shinichi Shinji Shiro Shoichi Shoji Shuichi Shuji Shunichi Susumu Tadao Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi Takumi Tama Tamotsu Taro Tatsuo Tatsuya Teruo Tetsip Tetsuya Tomi Tomio Toru Toshi Toshiaki Toshihiro Toshio Toshiyuki Toyo Tsuneo Tsutomu Tsuyoshi Uyeda Yasahiro Yasuhiro Yasuo Yasushi Yemon Yogi Yoichi Yori Yoshi Yoshiaki Yoshihiro Yoshikazu Yoshimitsu Yoshinori Yoshio Yoshiro Yoshito Yoshiyuki Yuichi Yuji Yuki';
  let lst2 = ['Yoshimitsu', 'Yoshiyuki', 'Yoshinori', 'Yoshikazu', 'Yoshihiro', 'Toshiyuki', 'Toshihiro', 'Shigekazu', 'Yoshiaki', 'Yasuhiro', 'Yasahiro', 'Tsuyoshi', 'Toshiaki', 'Takehiko', 'Takayuki', 'Takahiro', 'Shunichi', 'Shinichi', 'Shichiro', 'Nobuyuki', 'Yoshito', 'Yoshiro', 'Yasushi', 'Tsutomu', 'Tetsuya', 'Tatsuya', 'Tamotsu', 'Takeshi', 'Takeshi', 'Takashi', 'Tadashi', 'Shuichi', 'Shoichi', 'Shigeru', 'Senichi', 'Seiichi', 'Satoshi', 'Ryuichi', 'Ryoichi', 'Mitsuru', 'Yuichi', 'Yoshio', 'Yoichi', 'Tsuneo', 'Toshio', 'Tetsip', 'Tatsuo', 'Takumi', 'Susumu', 'Shinji', 'Shigeo', 'Satoru', 'Samuru', 'Saburo', 'Rokuro', 'Raiden', 'Noboru', 'Mitsuo', 'Minoru', 'Minori', 'Michio', 'Yoshi', 'Yemon', 'Yasuo', 'Uyeda', 'Toshi', 'Tomio', 'Teruo', 'Takeo', 'Takao', 'Tadao', 'Shuji', 'Shoji', 'Shiro', 'Shima', 'Seiji', 'Sadao', 'Ryozo', 'Ryota', 'Ronin', 'Ringo', 'Osamu', 'Norio', 'Nobuo', 'Naoko', 'Naoki', 'Mikio', 'Yuki', 'Yuji', 'Yori', 'Yogi', 'Toyo', 'Toru', 'Tomi', 'Taro', 'Tama', 'Shin', 'Shig', 'Ryuu', 'Rafu', 'Nori', 'Nobu', 'Miki', 'Ryo', 'Nao'];
  lineupStudents(s2), lst2
Pseudocode:
  convert input str into an array of strs
    split input str on space
  sort array of strs by length desc
    if length is equal
      sort in reverse alphabetical order
  return sorted array of strs
*/

function lineupStudents(students) {
  return students.split(' ').sort((a, b) => b.length - a.length || b.localeCompare(a));
}

const lineupStudents = s => s.split` `.sort((a, b) => b.length - a.length || b.localeCompare(a));