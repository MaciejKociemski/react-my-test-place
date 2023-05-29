import { useState } from "react";

function App() {
  const [formList, setFormList] = useState([]);
  const [formData, setFormData] = useState({
    formName: "",
    formType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = {
      id: new Date().getTime(),
      formName: formData.formName,
      formType: formData.formType,
    };

    setFormList([...formList, newForm]);
    setFormData({
      formName: "",
      formType: "",
    });
  };

  return (
    <div>
      <h1>Formularze</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nazwa formularza:
          <input
            type="text"
            name="formName"
            value={formData.formName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Rodzaj formularza:
          <input
            type="text"
            name="formType"
            value={formData.formType}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Dodaj formularz</button>
      </form>

      <h2>Lista formularzy:</h2>
      {formList.length === 0 ? (
        <p>Brak dodanych formularzy.</p>
      ) : (
        <ul>
          {formList.map((form) => (
            <li key={form.id}>
              <strong>Nazwa:</strong> {form.formName}, <strong>Rodzaj:</strong>{" "}
              {form.formType}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
