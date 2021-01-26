import React from 'react';
import './UserInfo.css';
import _ from 'lodash'

const UserInfo = ({userInfo}) => {
    console.log('userInfooooo----',userInfo);
    const {
        analitics,
        consult,
        programming,
        projecting,
        projectplan,
        reading,
        rest,
        testing,
        writingaction,
        writingdocumentation,

    } = userInfo

    const result = analitics+consult+programming+projecting+projectplan+reading+rest+testing+writingaction+writingdocumentation
    
	return(
        <div>
        
            <div className='center'>
                <div className='mainn form center pa4 br3 shadow-1'>
                <p className='p_div f3'>
                {'Broj sati uložen u rad:'}
                </p>
                <div className='main_one center'>
                    <div className="forma br3 shadow-4">
                        <label className=" db fw6 lh-copy f6" for="projectplan" name='projectplan' id='projectplan'>Planiranje projekta: {userInfo.projectplan}</label> 
                    </div>
                    <div className='forma br3 shadow-4'>
                        <label className=" db fw6 lh-copy f6" for="reading" name='reading' id='reading'>Čitanje literature: {reading}</label>
                    </div>
                    <div className='forma br3 shadow-3'>
                        <label className=" db fw6 lh-copy f6" for="analitics" name='analitics' id='analitics'>Analiza zahtjeva: {analitics}</label>
                    </div>
                    <div className='forma br3 shadow-3'>
                        <label className=" db fw6 lh-copy f6" for="projecting" name='projecting' id='projecting'>Projektiranje: {projecting}</label>
                    </div>
                    <div className='forma br3 shadow-3'>
                        <label className=" db fw6 lh-copy f6" for="programming" name='programming' id='programming'>Programiranje: {programming}</label>
                    </div>
                    <div className='forma br3 shadow-3'>
                        <label className=" db fw6 lh-copy f6" for="testing" name='testing' id='testing'>Testiranje: {testing}</label>
                    </div>
                    <div className='forma br3 shadow-3'>
                        <label className=" db fw6 lh-copy f6" for="writingdocumentation" name='writingdocumentation' id='writingdocumentation'>Dokumentiranje: {writingdocumentation}</label>
                    </div>
                    <div className='forma br3 shadow-3'>
                        <label className=" db fw6 lh-copy f6" for="writingaction" name='writingaction' id='writingaction'>Pisanje radnje: {writingaction}</label>
                    </div><div className='forma br3 shadow-3'>
                        <label className=" db fw6 lh-copy f6" for="consult" name='consult' id='consult'>Konzultacije: {consult}</label>
                    </div><div className='forma br3 shadow-3'>
                        <label className=" db fw6 lh-copy f6" for="other" name='rest' id='rest'>Ostalo: {rest}</label>
                    </div>
                    <div className='form center br3'>   
                        <label className='button_main near-black f4  ph3 br2 shadow-3 bg-white'>UKUPNO UTROŠENO SATI: {result}</label>
                    </div>
                     <p className='p_div f5 mt4'>
                {'NAPOMENA: Prosječnom studentu potrebno je 900 sati za izradu diplomskog projekta.'}
                </p>
                </div>
                </div>
        </div>
        </div>
	);
}

export default UserInfo;