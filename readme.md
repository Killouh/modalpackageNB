# modalpackage

Installation

```
$ npm install --save @killouh/modalpackage
$ yarn add @killouh/modalpackage

```

Guide and examples

States you need where you call code :

```
  // Modal state example
const [modalOpen, setModalOpen] = useState(false);

  // Modal actions examples
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

```

How you call it in your code :

```
import Modal from '@killouh/modalpackage';

<Modal
        isOpen={modalOpen}
        onClose={closeModal}
        modalClassName="yourmodalClassName"
        contentClassName="yourcontentClassName"
        closeClassName="yourcloseClassName">

        // Content example with a confirmation :
        <p className="modal-text">Form Sent!</p> >

        // Content example with a form :
                <form onSubmit={handleSubmit} action="#" id="form-employee">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleInputChange}
            required
          />


          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="address.street"
              value={employeeData.address.street}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="address.city"
              value={employeeData.address.city}
              onChange={handleInputChange}
              required
            />
          <button type="submit" className="create-btn">
            Save
          </button>
        </form>
</Modal>
```

Here's a Start Css example :
```
/* Modal Part */
.yourmodalClassName {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.yourcontentClassName {
  position: relative;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.yourcloseClassName {
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  font-weight: bolder;
}

```
===

Thanks
