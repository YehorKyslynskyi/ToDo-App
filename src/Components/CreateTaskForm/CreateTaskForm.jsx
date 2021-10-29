import React, { useState } from 'react'
import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import styles from './createTaskForm.module.scss'
import RadioButton from '../shared/RadioButton/RadioButton'

const CreateTaskForm = ({ register, handleSubmit, onSubmit }) => {
  const [selectedType, setSelectedType] = useState(null)

  const setType = (e) => setSelectedType(e.target.value)

  const checkIsActive = (value) => selectedType === value

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={styles.label}
        type="text"
        register={register}
        placeholder="Title"
        name="title"
      />
      <Input
        className={styles.label}
        type="text"
        register={register}
        placeholder="Message"
        name="message"
      />
      <div className={styles.radioContainer}>
        <RadioButton
          register={register}
          onChange={setType}
          label="Business Task"
          value="business"
          registerName="type"
          isActive={checkIsActive('business')}
        />
        <RadioButton
          register={register}
          onChange={setType}
          label="Personal Task"
          value="personal"
          registerName="type"
          isActive={checkIsActive('personal')}
        />
      </div>

      <Button className={styles.button} type="submit">
        Add
      </Button>
    </form>
  )
}

export default CreateTaskForm
