import React, { useState } from 'react'
import cx from 'classnames'
import { taskFormValidations } from '../../../../utils/validations'
import Input from '../../../shared/Input'
import styles from './createTaskForm.module.scss'
import RadioButton from '../../../shared/RadioButton'
import Button from '../../../shared/Button'

const CreateTaskForm = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  className,
}) => {
  const [selectedType, setSelectedType] = useState(null)

  const setType = (e) => setSelectedType(e.target.value)

  const checkIsActive = (value) => selectedType === value

  return (
    <form
      className={cx(styles.form, className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        validations={taskFormValidations}
        type="text"
        register={register}
        placeholder="Title"
        name="title"
        error={errors?.title?.message}
      />
      <Input
        validations={taskFormValidations}
        type="text"
        register={register}
        placeholder="Message"
        name="message"
        error={errors?.message?.message}
      />
      <div className={styles.radioContainer}>
        <RadioButton
          register={register}
          onChange={setType}
          label="Business Task"
          value="Business"
          registerName="type"
          isActive={checkIsActive('Business')}
        />
        <RadioButton
          register={register}
          onChange={setType}
          label="Personal Task"
          value="Personal"
          registerName="type"
          isActive={checkIsActive('Personal')}
        />
      </div>

      <Button className={styles.button} type="submit">
        Add Task to List
      </Button>
    </form>
  )
}

export default CreateTaskForm
