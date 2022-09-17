const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theaterIxx = await promiseTheaterIXX();
    const theaterVgc = await promiseTheaterVGC();
    const allTheater = [...theaterIxx, ...theaterVgc];

    const emotions = allTheater.filter((emotion) => emotion.hasil == emosi);

    return emotions.length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
