import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import ChoosTrainWrapper from './shoosTrainWrapper';

const ChoosTrain = () => {
    return (
        <ChoosTrainWrapper>
            <section className='choos-train '>
                <div className='container'>
                    <div class="card px-2 py-3 rounded-3 mb-3">
                        <h4><span>BUXORO</span>dan <span>SAMARQAND</span>gacha chiptalarni xarid qiling va <span>SAMARQAND</span>dan <span>BUXORO</span>gacha</h4>
                    </div>
                    <div className='card rounded-3 p-3'>
                        <div className='from-leave-to py-3 px-2 rounded-2'>
                            <span className='train me-1'>Afrosiyob</span>
                            <span className='mb-0 title-transport fw-bold'>067F <span className=''>(СКР)</span> </span>
                            <span className='place'>Tashkent Jan</span>
                            <FontAwesomeIcon className='mx-1 from-to' icon={faArrowRightLong} />
                            <span className='place'>Qashqadaryo</span>
                        </div>

                        <div className='d-flex justify-content-between align-items-center py-3'>
                            <div>
                                <span className='leave'>Jo'nash: </span><span className='leave-from'>Tashkent Jan</span> <br />
                                <span className='leave-time'>01:07</span> <span className='leave-date'>-19.01.2023</span>
                            </div>
                            <div>
                                <h2>03:33</h2>
                            </div>
                            <div>
                                <span className='leave'>Kelish: </span><span className='leave-from'>Qarshi</span> <br />
                                <span className='leave-time'>01:07</span> <span className='leave-date'>-19.01.2023</span>
                            </div>
                        </div>
                        <div>
                            <h4>Vagon va joyla soni:</h4>
                        </div>
                    </div>
                </div>
            </section>
        </ChoosTrainWrapper>
    )
}

export default ChoosTrain;