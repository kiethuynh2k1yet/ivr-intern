
export function makeid(l) {
  var text = "";
  var char_list = "0123456789";
  for (var i = 0; i < l; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
}
// console.log(makeid(6));

// export const nextConfig = {
//   async redirects() {
//       return [
//           {
//               source: '/ivrweb/e-form/9',
//               destination: '/ivrweb/e-form/10',
//               permanent: true,
//           },
//       ];
//   },
// };