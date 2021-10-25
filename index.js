console.log("hello");
<div className="App text-left">
  <h4 className="text-center py-4">
    <img
      alt="till-logo"
      className="mb-3"
      width="10%"
      src="https://bit.ly/3rb8eaB"
    />
    <br />
    Payment.js example
  </h4>
  <div className="row border-bottom border-primary pb-2 px-2">
    <PaymentSummary />
    <form id="payment_form" className="col mx-4" onSubmit={interceptSubmit}>
      <div className="row mb-2 pr-5">
        <label className="col-3" htmlFor="card_holder">
          Name:
        </label>
        <input
          readOnly
          placeholder="Prashant Rana"
          className="col"
          type="text"
          id="card_holder"
          name="card_holder"
        />
      </div>
      <div className="row mb-4 pr-5">
        <label className="col-3" htmlFor="email">
          Email:
        </label>
        <input
          readOnly
          placeholder="prashantrana.com"
          className="col"
          type="text"
          id="email"
          name="email"
        />
      </div>
      <div className="pt-3 mb-2 border-top border-primary"></div>
      <p className="text-danger">These fields are iframed in</p>
      <div className="row mb-2 pci-field-height">
        <label className="col-3" htmlFor="number_div">
          Card:
        </label>
        <div className="col-7" id="number_div"></div>
      </div>
      <div className="row mb-2 pci-field-height">
        <label className="col-3" htmlFor="cvv_div">
          CVV:
        </label>
        <div className="col" id="cvv_div"></div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <p>Expiry: (mm/yy)</p>
        </div>
        <div className="col-4">
          <input
            readOnly
            className="col"
            placeholder="05"
            type="text"
            id="exp_month"
            name="exp_month"
          />
        </div>
        <div className="col-4">
          <input
            readOnly
            placeholder="21"
            className="col"
            type="text"
            id="exp_year"
            name="exp_year"
          />
        </div>
        <div className="col pb-2 text-right">
          <input
            type="submit"
            className="btn btn-outline-primary"
            value="Get Token"
          />
        </div>
      </div>
    </form>
  </div>
  {showResult ? (
    <PaymentResult t={token} cd={cardData} err={errors} />
  ) : (
    <TestCardInfo />
  )}
</div>

 