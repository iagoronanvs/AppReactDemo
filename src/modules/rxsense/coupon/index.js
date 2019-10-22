import React, {useState, useEffect } from 'react';

import {
  Container,
  Input,
  ButtonText,
  Button,
  Label,
  ContainerCoupon,
  HeaderCoupon,
  LabelCoupon,
  InfoPrice,
  DescriptionPrice,
  LabelPrice,
  DataView,
  LabelString,
  LabelDesc
} from './styles';

import * as Constants from '../../../util/Constants';

import { request } from '../../../Api';
import details from '../details';


export default function coupon( props ) {

  const { info, data } = props;

  const [token, setToken] = useState(null);
  const [form, setForm] = useState({});
  const [coupon, setCoupon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);

  function validate() {

    console.log(form);

    // if (!form.fn) {
    //   alert('Please enter your first name.');
    //   return;
    // }

    // if (!form.ln) {
    //   alert('Please enter your last name.');
    //   return;
    // }

    // if (!form.email) {
    //   alert('Please enter your email.');
    //   return;
    // }

    return true;
  }

  async function submit(token) {
    if (validate()) {

      let infoPrice = info.Prices[0];

      let obj = {
        token: token,
        partner_username: infoPrice.PartnerUser,
        partner_password: infoPrice.PartnerPassword,
        cost: infoPrice.Price,
        prescription: data.details.Key,
        pharmacy: info.Pharmacy.Name,
        quantity: data.quantity.Key,
        form: data.form.Key,
        dosage: data.dosage.Key,
      }

      console.log(form);
      console.log(obj);

      request
      .post(Constants.POST_RXSENSE_SEND_COUPON, obj)
      .then(response => {
        console.log(response.data);
        setCoupon(response.data.Contacts[0]);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
    }
  }

  async function submit2() {
    if (validate()) {

      let infoPrice = info.Prices[0];

      let obj = {
        ...form,
        token,
        partner_username: infoPrice.PartnerUser,
        partner_password: infoPrice.PartnerPassword,
        cost: infoPrice.Price,
        prescription: data.details.Key,
        pharmacy: info.Pharmacy.Name,
        quantity: data.quantity.Key,
        form: data.form.Key,
        dosage: data.dosage.Key,
      }

      console.log(form);
      console.log(obj);

      request
      .post(Constants.POST_RXSENSE_EMAIL_COUPON, obj)
      .then(response => {
        console.log(response.data);
        setSend(true);
        //setCoupon(response.data.Contacts[0]);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
    }
  }

  function getToken() {
    setLoading(true);

    request
    .get(Constants.GET_RXSENSE_TOKEN)
    .then(async response => {
      setToken(response.data.Token);
      submit(response.data.Token);
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    });
  }

  useEffect(() => {
    console.log(info);
    console.log(data);

    let infoPrice = info.Prices[0];

    setForm({ ...form,
      partner_username: infoPrice.PartnerUser,
      partner_password: infoPrice.PartnerPassword,
      cost: infoPrice.Price,
      prescription: data.details.Key,
      pharmacy: info.Pharmacy.Name,
      quantity: data.quantity.Key,
      form: data.form.Key,
      dosage: data.dosage.Key
    });

    getToken();
  }, []);

  return (
    <Container>

      {info && coupon && (
        <>
        <ContainerCoupon>
          <HeaderCoupon>
            <LabelCoupon>{info.Pharmacy.Name}</LabelCoupon>
            <InfoPrice>
              <DescriptionPrice>Price with coupon</DescriptionPrice>
              <LabelPrice>${form.cost}</LabelPrice>
            </InfoPrice>
          </HeaderCoupon>
          <DataView style={{ marginTop: 10 }}>
            <LabelString>MEMBER ID</LabelString>
            <LabelDesc>{coupon.MemberNumber}</LabelDesc>
          </DataView>
          <DataView>
            <LabelString>GROUP</LabelString>
            <LabelDesc>{coupon.GroupNumber}</LabelDesc>
          </DataView>
          <DataView>
            <LabelString>BIN</LabelString>
            <LabelDesc>{coupon.BIN}</LabelDesc>
          </DataView>
          <DataView>
            <LabelString>PCN</LabelString>
            <LabelDesc>{coupon.PCN}</LabelDesc>
          </DataView>
        </ContainerCoupon>

        <DataView style={{ marginTop: 10 }}></DataView>

        <Input placeholder="First Name" value={form.fn} onChangeText={ (value) => setForm({ ...form, fn: value }) } />
        <Input placeholder="Last Name" value={form.ln} onChangeText={ (value) => setForm({ ...form, ln: value }) } />
        <Input placeholder="E-mail" value={form.email} onChangeText={ (value) => setForm({ ...form, email: value }) } />
        <Button onPress={submit2}>
          <ButtonText>Send Coupon</ButtonText>
        </Button>
        </>
      )}

      {send &&
        <Label>* An Email has been sent to your mailbox with the requested coupon.</Label>
      }

    </Container>
  );
}
