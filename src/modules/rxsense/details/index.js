import React, { useEffect, useState } from 'react';

import {
  Container,
  Label,
  Details,
  Option,
  OptionLabel,
  Price,
  Scroll,
  CouponButton,
  CouponLabel,
  OptionInfo
} from './styles';

import { request } from '../../../Api';

import * as Constants from '../../../util/Constants';

import { Actions } from 'react-native-router-flux';


export default function details( props ) {

  const { drug } = props;

  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  const [details, setDetails] = useState({});
  const [form, setForm] = useState(null);
  const [dosage, setDosage] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const [prices, setPrices] = useState([]);

  function getPrices(token_, quantity_)  {
    console.log(token_);
    console.log(quantity_);
    request
    .post(Constants.POST_RXSENSE_PRICES, { token: token_, ndc: drug.ndc, quantity: quantity_ })
    .then(response => {

      console.log(response.data.Value.PharmacyPricings);
      setPrices(response.data.Value.PharmacyPricings);

      setLoading(false);
    })
    .catch(error => {
        console.log(error);
        setLoading(false);
    });
  }

  function drugDetails(token_)  {
    request
    .post(Constants.POST_RXSENSE_DRUG_DETAILS, { token: token_, ndc: drug.ndc })
    .then(response => {

      let data = response.data.Value[0];

      let form_ = data.Value[0];
      setForm(form_);

      let dosage_ = form_.Value[0];
      setDosage(dosage_);

      let quantity_ = dosage_.Value[0];
      setQuantity(quantity_);

      getPrices(token_, quantity_.Key);

      setDetails(data);
      setLoading(false);
    })
    .catch(error => {
        console.log(error);
        setLoading(false);
    });
  }

  function getToken() {
    setLoading(true);

    request
    .get(Constants.GET_RXSENSE_TOKEN)
    .then(response => {
      setToken(response.data.Token);
      drugDetails(response.data.Token);
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    });
  }

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Container>
      {details && details.Key && (
      <>
        <Label>{ details.Key }</Label>
        <Details>
          <Label>{ dosage.Key } </Label>
          <Label>| </Label>
          <Label>{ quantity.Key } </Label>
          <Label>{ form.Key }s </Label>
        </Details>
      </>
      )}

      <Scroll>

        {prices && prices.length > 0 && prices.map((p,i) => {
          let price = p.Prices[0];
          return (
            <Option key={i}>
              <OptionInfo>
                <Price>${price.FormattedPrice}</Price>
                <CouponButton onPress={() => Actions.coupon({ info: p, data: { form, dosage, quantity, details } })}>
                  <CouponLabel>GET COUPON</CouponLabel>
                </CouponButton>
              </OptionInfo>
              <OptionLabel>{p.Pharmacy.Name}</OptionLabel>
            </Option>
          );
        })}

      </Scroll>

    </Container>
  );
}
