import styles from './messagesTop.module.scss';

import classNames from 'classnames'

// Custom
import useSystemStore from '@/hooks/storeSystem';
import { startConfetti } from '@/lib/utils';
import { useEffect } from 'react';

const MessagesTop = () => {
    const { messageTop, setStoreValue } = useSystemStore()

    const handleClick = () => {
        setStoreValue('messageTop', null)
        setTimeout(() => setStoreValue('leftMenuBar', { isShow: true }), 500)
    }

    useEffect(() => {
        messageTop && startConfetti()
    }, [messageTop])

    return <div className={classNames('MessagesTop', { [styles.MessagesTop]: true, [styles.isVisible]: messageTop })} onClick={handleClick}>
        {messageTop}
    </div>
}

export default MessagesTop;
