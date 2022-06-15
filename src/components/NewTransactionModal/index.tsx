import Modal from 'react-modal';
import closeImg from "../../assets/close.svg";
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer } from './styles';

Modal.setAppElement('#root');

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTtransactionModal({ isOpen, onRequestClose }: NewTransactionsModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />

                <TransactionTypeContainer>
                    <button type="button">
                        <img src={incomeSvg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={outcomeSvg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input type="text" placeholder="Categoria" />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}