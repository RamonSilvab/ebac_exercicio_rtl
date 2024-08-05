/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve permitir adicionar dois comentários', () => {
        render(<PostComments />);

        const textarea = screen.getByTestId('comment-textarea');
        const submitButton = screen.getByTestId('comment-submit-button');

        // Adicionando o primeiro comentário
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        // Verificando se o primeiro comentário foi adicionado
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        // Adicionando o segundo comentário
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        // Verificando se o segundo comentário foi adicionado
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();

        // Verificando o número total de comentários
        const commentsList = screen.getByTestId('comment-list');
        expect(commentsList.children).toHaveLength(2);
    });
});