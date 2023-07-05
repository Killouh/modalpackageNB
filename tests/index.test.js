import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../src/index';
import '@testing-library/jest-dom/extend-expect';

describe('Modal', () => {
  it('renders modal when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  it('does not render modal when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(queryByText('Modal Content')).toBeNull();
  });

  it('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    const closeButton = getByText('X');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('renders modal with custom CSS classes', () => {
    const { getByTestId } = render(
        <Modal isOpen={true} onClose={jest.fn()} modalClassName="custom-modal" contentClassName="custom-content" closeClassName="custom-span">
        Modal Content
      </Modal>
    );

    const modal = getByTestId('modal');
    const content = getByTestId('content');
    const close = getByTestId('close');

    expect(modal).toHaveClass('custom-modal');
    expect(content).toHaveClass('custom-content');
    expect(close).toHaveClass('custom-span');
  });

  it('renders children inside the modal', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <div>Child Component</div>
      </Modal>
    );

    expect(getByText('Child Component')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={onCloseMock}>
        Modal Content
      </Modal>
    );

    const closeButton = getByText('X');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('handles missing or incorrect props', () => {
    const { queryByTestId } = render(<Modal />);
    expect(queryByTestId('modal')).toBeNull();
    expect(queryByTestId('content')).toBeNull();
  });

  it('closes the modal even if onClose prop is missing', () => {
    const { getByText } = render(
      <Modal isOpen={true}>
        Modal Content
      </Modal>
    );

    const closeButton = getByText('X');
    fireEvent.click(closeButton);

    // No error should be thrown
  });

  it('conditionally renders the modal based on another variable or state', () => {
    const shouldRenderModal = true; // Set your condition here
    const { getByTestId, queryByTestId } = render(
      <div>
        {shouldRenderModal && (
          <Modal isOpen={true} onClose={jest.fn()} data-testid="modal">
            Modal Content
          </Modal>
        )}
      </div>
    );

    if (shouldRenderModal) {
      expect(getByTestId('modal')).toBeInTheDocument();
    } else {
      expect(queryByTestId('modal')).toBeNull();
    }
  });

});