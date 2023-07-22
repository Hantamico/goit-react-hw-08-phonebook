import React from "react";
import { Bars } from "react-loader-spinner";
import css from './LoadingSpinner.module.css'

export default function LoadingSpinner() {
    return <div className={css.SpinnerContainer}>
        <Bars
        visible={true}
        height={350}
        width={350}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
    />
        </div>
    
}