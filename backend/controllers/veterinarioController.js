const registrar = (req, res) => {
  res.json({ msg: "Registrando usuario" });
};

const perfil = (req, res) => {
  res.json({ url: "Mostrando Perfil" });
};

export { registrar, perfil };
