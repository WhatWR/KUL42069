import React, { useState } from 'react'
import styles from '../styles/Form.module.scss'
import DisplayForm from './DisplayForm'

const Form = ({ props }) => {
    const [province, setProvince] = useState([])
    const [loading, setLoading] = useState(false)
    const covids = props

    const handleSubmit = (e) => {
        e.preventDefault()

        if (province) {
            setLoading(true)
        }
    }
    console.log(covids)


    const result = covids.filter(e => e.province == province)

    console.log(result[0])

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Province:
                    <input type="text" onChange={e => setProvince(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {/* <DisplayForm props={result[0]}/> */}
            {result[0] ? <>total case: {result[0].total_case} new case: {result[0].new_case}</>: <></>}
        </div>

    )
}

export default Form