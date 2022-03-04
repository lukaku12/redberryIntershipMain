const changer = (values) => {
  let title = "";

  if (values === 1) {
    title = "HTML";
  }
  if (values === 2) {
    title = "CSS";
  }
  if (values === 3) {
    title = "PHP";
  }
  if (values === 4) {
    title = "Laravel";
  }
  if (values === 5) {
    title = "React.JS";
  }
  if (values === 6) {
    title = "Vue.JS";
  }
  if (values === 7) {
    title = "Svelte";
  }
  if (values === 8) {
    title = "Angular";
  } 

  return title;
};

export default changer;
