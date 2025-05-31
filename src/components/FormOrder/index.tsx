import { useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import type { AppDispatch } from '@/store'
import {
  setName,
  setSurname,
  setEmail,
  setPhone,
  setStreet,
  setNumber,
  setNeighborhood,
  setCity,
  setState,
} from '@/store/reducers/formOrderSlice'

import * as Yup from 'yup'

import { generateTime } from '@/utils/generateTime'
import { faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'

import ShippingPage from '../Freight'
import CheckoutTitle from '../CheckoutTitles'

import { Button, OrderForm, FormSection, Field } from './styles'

type FormData = Yup.InferType<typeof validationSchema>

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  surname: Yup.string().required('Sobrenome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  street: Yup.string().required('Rua é obrigatória'),
  number: Yup.string().required('Número é obrigatório'),
  neighborhood: Yup.string().required('Bairro é obrigatório'),
  city: Yup.string().required('Cidade é obrigatória'),
  state: Yup.string().required('Estado é obrigatório'),
})

const FormOrder = () => {
  const dispatch = useDispatch<AppDispatch>()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: FormData) => {
    dispatch(setName(data.name))
    dispatch(setSurname(data.surname))
    dispatch(setEmail(data.email))
    dispatch(setPhone(data.phone))
    dispatch(setStreet(data.street))
    dispatch(setNumber(data.number))
    dispatch(setNeighborhood(data.neighborhood))
    dispatch(setCity(data.city))
    dispatch(setState(data.state))
    generateTime(dispatch) // Gera o timestamp e relatório
    console.log('Dados validados enviados para Redux:', data)
  }

  return (
    <OrderForm onSubmit={handleSubmit(onSubmit)}>
      <FormSection>
        <CheckoutTitle icon={faUser}>Suas Informações</CheckoutTitle>
        <Field>
          <label htmlFor="name">Nome</label>
          <input id="name" {...register('name')} placeholder="Nome" />
          {errors.name && <p>{errors.name.message}</p>}
        </Field>
        <Field>
          <label htmlFor="surname">Sobrenome</label>
          <input
            id="surname"
            {...register('surname')}
            placeholder="Sobrenome"
          />
          {errors.surname && <p>{errors.surname.message}</p>}
        </Field>
        <Field>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </Field>
        <Field>
          <label htmlFor="phone">Telefone</label>
          <InputMask
            mask="(99) 99999-9999"
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="Telefone"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </Field>
      </FormSection>
      <FormSection>
        <CheckoutTitle icon={faLocationDot}>Endereço de Entrega</CheckoutTitle>
        <Field>
          <label htmlFor="street">Rua</label>
          <input
            type="text"
            id="street"
            placeholder="Rua"
            {...register('street')}
          />
          {errors.street && <p>{errors.street.message}</p>}
        </Field>
        <Field>
          <label htmlFor="number">Número</label>
          <input
            type="text"
            id="number"
            placeholder="Número"
            {...register('number')}
          />
          {errors.number && <p>{errors.number.message}</p>}
        </Field>
        <Field>
          <label htmlFor="complement">Complemento</label>
          <input
            type="text"
            id="complement"
            placeholder="Complemento (opcional)"
          />
        </Field>
        <Field>
          <label htmlFor="neighborhood">Bairro</label>
          <input
            type="text"
            id="neighborhood"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
        </Field>
        <Field>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            placeholder="Cidade"
            {...register('city')}
          />
          {errors.city && <p>{errors.city.message}</p>}
        </Field>
        <Field>
          <label htmlFor="state">Estado</label>
          <input
            type="text"
            id="state"
            placeholder="Estado"
            {...register('state')}
          />
          {errors.state && <p>{errors.state.message}</p>}
        </Field>
        <ShippingPage />
        <Button type="submit">Finalizar</Button>
      </FormSection>
    </OrderForm>
  )
}

export default FormOrder
